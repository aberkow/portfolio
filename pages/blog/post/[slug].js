import Head from 'next/head'

import { markdownToHTML } from '../../../lib/markdown'
import { contentfulQuery } from '../../../lib/graphql'

import SEO from '../../../Components/Head/SEO'

export default function Post({ post, content }) {
  return (
    <>
      <Head>
        <SEO
          description="A blog post"
          title={post.title}
        />
      </Head>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const query = `
    {
      blogPostCollection (
        where: {
          slug: "${params.slug}"
        }
        limit: 1
      ) {
        items {
          slug
          title
          content
        }
      }
    }
  `

  const post = await contentfulQuery(query)

  const content = await markdownToHTML(post.data.blogPostCollection.items[0]['content'])
  
  delete post.data.blogPostCollection.items[0]['content']

  return {
    props: {
      post: post.data.blogPostCollection.items[0],
      content
    }
  }
}


export async function getStaticPaths() {
  const query = `
    {
      blogPostCollection {
        items {
          slug
        }
      }
    }
  `

  const posts = await contentfulQuery(query)
  const paths = posts.data.blogPostCollection.items

  return {
    paths: paths.map(({ slug }) => `/blog/post/${encodeURIComponent(slug)}`),
    fallback: false
  }
}