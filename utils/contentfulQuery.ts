import { ContentfulQuery } from "../@types/contentful"

export const contentfulQuery = async (query: ContentfulQuery) => {
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify(query)
  })

  if (!res.ok) {
    throw new Error('failed to fetch')
  }

  return res.json()
}