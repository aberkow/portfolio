import { contentfulQuery } from '../../lib/graphql'
import ContentList from '../../Components/ContentList'
import { contentListClasses } from '../../config'

export default function Index({ items }) {
  return (
    <>
    <h1>Tags</h1>
      <ContentList 
        items={items}
        basePath="/tags"
        classes={contentListClasses}
      />
    </>
  )
}

export async function getStaticProps() {
  const query = `
    {
      singlePostTaxonomyCollection (
        order: taxonomyName_ASC
        where: {
          taxonomyType: "tag"
        }
      ) {
        items {
          taxonomyName
          taxonomySlug
        }
      }
    }
  `

  const tags = await contentfulQuery(query)

  const items = tags.data.singlePostTaxonomyCollection.items.map(({ taxonomyName, taxonomySlug }) => {
    return {
      title: taxonomyName,
      slug: taxonomySlug
    }
  })

  return {
    props: {
      items
    }
  }

}