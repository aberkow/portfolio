import Link from 'next/link'

const ContentList = ({ items, basePath }) => (
  <ul>
    {
      items.map((item, index) => {
        return (
          <li key={index}>
            <Link href={`${basePath}/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        )
      })
    }
  </ul>
)

export default ContentList