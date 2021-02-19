import { contentfulQuery } from '../../lib/graphql'
import ContentList from '../../Components/ContentList'
import { contentListClasses } from '../../config'

export default function Index({ items }) {
  return (
    <>
      <h1>Technology</h1>
      <ContentList
        items={items}
        basePath="/technology"
        classes={contentListClasses}
      />
    </>
  )
}

export async function getStaticProps() {
  const query = `
    {
      projectTechnologyCollection (
        order: technologyName_ASC
      ) {
        items {
          technologyName
          technologySlug
        }
      }
    }
  `

  const { data } = await contentfulQuery(query)

  const items = data.projectTechnologyCollection.items.map(({ technologyName, technologySlug }) => {
    return {
      title: technologyName,
      slug: technologySlug
    }
  })

  return {
    props: {
      items
    }
  }

}