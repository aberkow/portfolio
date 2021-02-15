import ContentList from '../../Components/ContentList'
import PaginationLink from '../../Components/PaginationLink'
import { contentfulQuery } from '../../lib/graphql'

export default function Index({ posts, page, totalPages }) {
  
  const currentPage = parseInt(page)

  return (
    <>
      <h1>Hello blog</h1>
      <ContentList items={posts} basePath="/blog/post" />
      {
        currentPage >= 2 && currentPage < totalPages && (
          <PaginationLink href={`/blog/${currentPage + 1}`}>
            Next Page
          </PaginationLink>
        )
      }
      {
        currentPage >= 2 && currentPage <= totalPages && (

          <PaginationLink
            href={`/blog/${currentPage - 1 === 1 ? '' : currentPage - 1}`}
          >
            Previous Page
          </PaginationLink>
        )
      }
    </>
    
  )
}

export async function getStaticProps({ params }) {
  
  const query = `
  {
    blogPostCollection {
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
      posts: data.blogPostCollection.items,
      page: params.page,
      totalPages: Math.ceil(data.blogPostCollection.total / 10)
    }
  }
}

export async function getStaticPaths() {

  const query = `
    {
      blogPostCollection {
        total
      }
    }
  `

  const { data } = await contentfulQuery(query)
  const totalPages = Math.ceil( data.blogPostCollection.total / 10)

  const paths = Array.from({ length: totalPages }, (_, index) => {
    return {
      params: {
        page: `${index + 2}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}