import { contentfulQuery } from '../../lib/graphql'
import ContentList from '../../Components/ContentList'
import { contentListClasses } from '../../config'
import { normalizeKeys } from '../../lib/normalize';

export default function Tags({ technologyName, projects }) {
  return (
    <>
      <h1>Technology - {technologyName}</h1>
      <ContentList
        items={projects}
        basePath="/projects/item"
        classes={contentListClasses}
      />
    </>
  )
}


export async function getStaticProps({ params }) {

  const query = `
    {
      projectTechnologyCollection (
        where: {
          technologySlug: "${params.slug}"
        }
      ) {
        items {
          technologyName
          technologySlug
          linkedFrom {
            projectCollection {
              items {
                projectTitle
                projectSlug
                projectDescription
              }
            }
          }
        }
      }
    }
  `

  const { data } = await contentfulQuery(query)
  const technologyName = data.projectTechnologyCollection.items[0].technologyName
  const projects = data.projectTechnologyCollection.items[0].linkedFrom.projectCollection.items

  const replacements = {
    projectTitle: 'title',
    projectSlug: 'slug',
    projectDescription: 'excerpt'
  }

  const normalizedProjects = projects.map(project => {
    return normalizeKeys(project, replacements)
  })


  return {
    props: {
      technologyName,
      projects: normalizedProjects
    }
  }
}

export async function getStaticPaths() {
  const query = `
    {
      projectTechnologyCollection {
        items {
          technologySlug
        }
      }
    }
  `

  const { data } = await contentfulQuery(query)
  const paths = data.projectTechnologyCollection.items

  return {
    paths: paths.map(({ technologySlug }) => `/technology/${encodeURIComponent(technologySlug)}`),
    fallback: false
  }
}