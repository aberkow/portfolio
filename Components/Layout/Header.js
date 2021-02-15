import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <p className="sm:text-xl md:text-2xl lg:text-3xl">
          <Link href="/">
            Adam Berkowitz - Web Developer
          </Link>
        </p>
        <nav>
          <ul className="flex">
            <li>
              <Link href="/blog">
                <a className="p-4">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="p-4">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="p-4">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="p-4">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
