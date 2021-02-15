import ContentList from '../../Components/ContentList'
import PaginationLink from '../../Components/PaginationLink'

import { contentfulQuery } from '../../lib/graphql'

export default function Index({ posts }) {
  return (
    <>
      <h1>The blog index</h1>
      <ContentList items={posts} basePath="/blog/post" />
      {
        posts.length >= 10 && (
          <PaginationLink href='/blog/2'>
            Next Page
          </PaginationLink>
        )
      }
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