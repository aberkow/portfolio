import { Helmet } from 'react-helmet'
import ContentList from '../../Components/ContentList'
import PaginationLink from '../../Components/PaginationLink'

import { contentfulQuery } from '../../lib/graphql'
import { contentListClasses } from '../../config'

export default function Index({ posts }) {
  return (
    <>
      <Helmet
        title="Adam Berkowitz - Blog Posts"
        meta={[
          {
            property: 'og:title',
            content: 'Adam Berkowitz - Blog Posts'
          }
        ]}
      />
      <h1>Blog</h1>
      <ContentList 
        items={posts} 
        basePath="/blog/post" 
        classes={contentListClasses} 
      />
      <div className="flex flex-wrap justify-end">
        {
          posts.length > 10 && (
            <PaginationLink href='/blog/2'>
              Next Page
            </PaginationLink>
          )
        }
      </div>
    </>
  )
}

export async function getStaticProps() {

  const query = `
  {
    blogPostCollection (
      limit: 10
    ) {
      total
      items {
        slug
        title
        excerpt
      }
    }
  }
  `

  const { data } = await contentfulQuery(query)
  return {
    props: {
      posts: data.blogPostCollection.items
    }
  }
}