import { contentfulQuery } from "../../../utils/contentfulQuery"

export default async function Test() {

  const { 
    data: {
      blogPostCollection: {
        items
      }
    }
  } = await contentfulQuery({
    query: `query {
        blogPostCollection (
          limit: 10
        ) {
          total
          items {
            slug
            title
          }
        }
      }`})
  console.log(items, 'test')

  return (
    <>
    <h1>
      Hello world
    </h1>
    <div>
      <ul>
        {
          items && items.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })
        }
      </ul>
    </div>
    </>
  )
}