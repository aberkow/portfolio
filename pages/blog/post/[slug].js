import Head from 'next/head'

import { normalizeTags } from '../../../lib/normalize'
import { markdownToHTML } from '../../../lib/markdown'
import { contentfulQuery } from '../../../lib/graphql'
import PostTypeLayout from '../../../Components/Layout/PostTypeLayout'

import SEO from '../../../Components/Head/SEO'

export default function Post({ post, content, seo }) {

  console.log(seo);

  const tags = normalizeTags(post.tagReferenceGroupCollection.items, 'taxonomySlug', 'taxonomyName')

  return (
    <>
      <Head>
        <SEO
          description="A blog post"
          title={post.title}
          imageURL={seo.imageURL}
        />
      </Head>
      <PostTypeLayout 
        item={post}
        markdown={content}
        tags={tags}
      />
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
          featuredImageReference {
            altText
            imageCredit
            imageCreditLink
            featuredImage {
              url
              width
              height
            }
          }
          tagReferenceGroupCollection {
            items {
              taxonomyName
              taxonomySlug
            }
          }
        }
      }
    }
  `

  const post = await contentfulQuery(query)

  const content = await markdownToHTML(post.data.blogPostCollection.items[0]['content'])
  
  const seoURL = post.data.blogPostCollection.items[0]['featuredImageReference']['featuredImage']['url']

  delete post.data.blogPostCollection.items[0]['content']

  return {
    props: {
      post: post.data.blogPostCollection.items[0],
      content,
      seo: {
        imageURL: seoURL
      }
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