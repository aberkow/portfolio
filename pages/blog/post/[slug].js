import Head from 'next/head'
import Image from 'next/image'

import { markdownToHTML } from '../../../lib/markdown'
import { contentfulQuery } from '../../../lib/graphql'
import { taxonomyListClasses } from '../../../config'
import ContentList from '../../../Components/ContentList'

import SEO from '../../../Components/Head/SEO'

export default function Post({ post, content }) {

  const tags = post.tagReferenceGroupCollection.items.map(item => {
    return {
      slug: item.taxonomySlug,
      title: item.taxonomyName
    }
  })

  return (
    <>
      <Head>
        <SEO
          description="A blog post"
          title={post.title}
        />
      </Head>
      <div className="content-container content-grid">
        <div className="content-title-container">
          <h1>{post.title}</h1>
        </div>
        <div className="content-meta-container">
          <p className="hidden md:block">Tags:</p>
          <ContentList 
            items={tags} 
            basePath={`/tags`} 
            classes={taxonomyListClasses} 
          />
        </div>
        <div className="post-content max-w-prose" dangerouslySetInnerHTML={{ __html: content }}></div>
        <div className="content-image hidden lg:block sticky top-16 mt-8">
          <Image 
            src={post.featuredImageReference.featuredImage.url}
            alt={post.featuredImageReference.altText}
            layout="responsive"
            height={post.featuredImageReference.featuredImage.height / 10}
            width={post.featuredImageReference.featuredImage.width / 10}
          />
          <div className="mt-4">
            <p>Image by: <a href={post.featuredImageReference.imageCreditLink}>
                {post.featuredImageReference.imageCredit}
              </a>
            </p>
          </div>
        </div>
      </div>
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