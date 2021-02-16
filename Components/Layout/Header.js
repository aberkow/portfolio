import { useState } from 'react'

import Link from 'next/link'

export default function Header() {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <header>
      <div className="flex justify-between">
        <p className="hidden md:block md:text-2xl lg:text-3xl">
          <Link href="/">
            Adam Berkowitz - Web Developer
          </Link>
        </p>
        <p className="block md:hidden text-2xl">
          <abbr title="Adam J. Berkowitz">
            <Link href="/">
              AJB
            </Link>
          </abbr>
        </p>
        <nav>
          <button 
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-controls="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            { isMenuOpen ? 'Close' : 'Menu' }
          </button>
          <ul id="menu" className="flex" className={isMenuOpen ? `block` : `hidden`}>
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
