import Link from 'next/link'

export default function MainMenu({ id, classes, links }) {
  return (
    <ul id={id} className={classes.menuClasses}>
      {
        links.map(({ href, name }, index) => {
          return (
            <li key={index}>
              <Link href={href}>
                <a className={classes.linkClasses}>{name}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}