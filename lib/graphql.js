export const contentfulQuery = async (query) => {
  return await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then(res => res.json()).catch(err => console.log({ err }) || err)
}