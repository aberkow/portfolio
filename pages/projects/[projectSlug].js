import { contentfulQuery } from '../../lib/graphql'
import { markdownToHTML } from '../../lib/markdown'
import PostTypeLayout from '../../Components/Layout/PostTypeLayout'

export default function Project({ project, content }) {
  return (
    <PostTypeLayout 
      item={project}
      markdown={content}
    />
  )
}

export async function getStaticProps({ params }) {
  const query = `
    {
      projectCollection (
        where: {
          projectSlug: "${params.projectSlug}"
        }
        limit: 1
      ) {
        items {
          projectSlug
          projectTitle
          projectContent
          projectImage {
            altText
            imageCredit
            imageCreditLink
            featuredImage {
              url
              width
              height
            }
          }
          projectTechnologyListCollection {
            items {
              technologyName
              technologySlug
            }
          }
        }
      }
    }
  `

  const project = await contentfulQuery(query)
  const content = await markdownToHTML(project.data.projectCollection.items[0]['projectContent'])

  delete project.data.projectCollection.items[0]['projectContent']

  return {
    props: {
      project: project.data.projectCollection.items[0],
      content
    }
  }

}

export async function getStaticPaths() {
  const query = `
    {
      projectCollection {
        items {
          projectSlug
        }
      }
    }
  `

  const projects = await contentfulQuery(query)
  const paths = projects.data.projectCollection.items
  return {
    paths: paths.map(({ projectSlug }) => `/projects/${encodeURIComponent(projectSlug)}` ),
    fallback: false
  }
}