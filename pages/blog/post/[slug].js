import { Helmet } from 'react-helmet'

import { normalizeTags } from '../../../lib/normalize'
import { markdownToHTML } from '../../../lib/markdown'
import { contentfulQuery } from '../../../lib/graphql'
import PostTypeLayout from '../../../Components/Layout/PostTypeLayout'

export default function Post({ post, content, seo }) {

  const tags = normalizeTags(post.tagReferenceGroupCollection.items, 'taxonomySlug', 'taxonomyName')

  return (
    <>
      <Helmet 
        title={`Adam Berkowitz - ${post.title}`}
        description={seo.description}
        meta={
          [
            {
              property: 'og:title',
              content: `Adam Berkowitz - ${post.title}`
            },
            {
              property: 'og:image',
              content: seo.imageURL
            },
            {
              property: 'twitter:card',
              content: 'summary'
            },
            {
              property: 'twitter:title',
              content: `Adam Berkowitz - ${post.title}`
            },
            {
              property: 'twitter:description',
              content: `${seo.description}`
            },
            {
              property: 'twitter:image',
              content: seo.imageURL
            }
          ]
        }
      />
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
          excerpt
          featuredImageReference {
            altText
            imageCredit
            imageCreditLink
            featuredImage {
              fileName
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
        imageURL: seoURL,
        description: post.data.blogPostCollection.items[0]['excerpt']
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