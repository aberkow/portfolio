import { contentfulQuery } from '../../lib/graphql'
import ContentList from '../../Components/ContentList'
import { contentListClasses } from '../../config'

export default function Tags({ tagName, taggedPosts }) {
  return (
    <>
      <h1>Tag - {tagName}</h1>
      <ContentList 
        items={taggedPosts}
        basePath="/blog/post"
        classes={contentListClasses}
      />
    </>
  )
}


export async function getStaticProps({ params }) {

  const query = `
    {
      singlePostTaxonomyCollection (
        where: {
          taxonomySlug: "${params.slug}"
        }
      ) {
        items {
          taxonomyName
          linkedFrom {
            blogPostCollection {
              items {
                title
                slug
                excerpt
              }
            }
          }
        }
      }
    }
  `
  
  const collection = await contentfulQuery(query)
  const tagName = collection.data.singlePostTaxonomyCollection.items[0].taxonomyName
  const taggedPosts = collection.data.singlePostTaxonomyCollection.items[0].linkedFrom.blogPostCollection.items

  return {
    props: {
      tagName,
      taggedPosts
    }
  }
}

export async function getStaticPaths() {
  const query = `
    {
      singlePostTaxonomyCollection (
        where: {
          taxonomyType: "tag"
        }
      ) {
        items {
          taxonomySlug
        }
      }
    }
  `

  const tags = await contentfulQuery(query)
  const paths = tags.data.singlePostTaxonomyCollection.items

  return {
    paths: paths.map(({ taxonomySlug }) => `/tags/${encodeURIComponent(taxonomySlug)}`),
    fallback: false
  }
}