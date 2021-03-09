import { Helmet } from 'react-helmet'
import { contentfulQuery } from "../../lib/graphql"
import ContentList from '../../Components/ContentList'
import { contentListClasses } from "../../config"
import PaginationLink from "../../Components/PaginationLink"
import { normalizeKeys } from "../../lib/normalize"

export default function Index({ projects }) {
  return (
    <>
      <Helmet 
        title="Adam Berkowitz - Projects"
        meta={[
          {
            property: 'og:title',
            content: 'Adam Berkowitz - Projects'
          }
        ]}
      />
      <h1>Projects</h1>
      <ContentList
        items={projects}
        basePath="/projects/item"
        classes={contentListClasses}
      />
      {
        projects.length > 10 && (
          <div className="flex flex-wrap justify-end">
            <PaginationLink href="/projects/2">
              Next Page
            </PaginationLink>
          </div>
        )
      }
    </>
  )
}

export async function getStaticProps() {
  const query = `
    {
      projectCollection (
        limit: 10
      ) {
        total
        items {
          projectTitle
          projectSlug
          projectDescription
        }
      }
    }
  `

  const replacements = {
    projectTitle: 'title',
    projectSlug: 'slug',
    projectDescription: 'excerpt'
  }

  const { data } = await contentfulQuery(query)
  
  const normalizedProjects = data.projectCollection.items.map(item => normalizeKeys(item, replacements))

  return {
    props: {
      projects: normalizedProjects
    }
  }

}