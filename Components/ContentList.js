import Link from 'next/link'

const ContentList = ({ items, basePath }) => (
  <ul className="max-w-prose">
    {
      items.map((item, index) => {
        return (
          <li className="px-4 py-10 -mx-4" key={index}>
            <Link href={`${basePath}/${item.slug}`}>
              <a className="text-2xl">
                {item.title}
              </a>
            </Link>
            <div>{item.excerpt}</div>
          </li>
        )
      })
    }
  </ul>
)

export default ContentList