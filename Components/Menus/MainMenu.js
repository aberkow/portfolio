import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MainMenu({ id, classes, links }) {

  const router = useRouter()

  return (
    <ul id={id} className={classes.menuClasses}>
      {
        links.map(({ href, name }, index) => {
          const activeLink = router.pathname === href
          const linkClasses = activeLink ?
            `${classes.linkClasses} active` : 
            classes.linkClasses


          return (
            <li key={index}>
              <Link href={href}>
                <a className={linkClasses}>{name}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}