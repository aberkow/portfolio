import Link from 'next/link'

const ContentList = ({ items, basePath, classes }) => (
  <ul className={classes.listClasses}>
    {
      items.map((item, index) => {
        return (
          <li className={classes.itemClasses} key={index}>
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