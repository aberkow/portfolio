import { useState } from 'react'

import Link from 'next/link'

import { mainLinks } from '../../config'
import MainMenu from '../Menus/MainMenu'

export default function Header() {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const menuClasses = {
    menuClasses: 'hidden md:flex md:my-14',
    linkClasses: 'block p-4 hover:text-blue-800 focus:text-blue-800'
  }

  const mobileClasses = {
    menuClasses: isMenuOpen ? `font-mono flex flex-col` : `hidden`,
    linkClasses: 'block p-4 hover:text-blue-800 focus:text-blue-800'
  }

  return (
    <header>
      <div className="flex items-stretch justify-between font-mono">
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
        <nav className="mb-4">
          <div className="text-right">
            <button 
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-controls="mobile-menu"
              className="md:hidden font-mono"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              { isMenuOpen ? 'Close' : 'Menu' }
            </button>
          </div>
          <MainMenu 
            id="mobile-menu" 
            classes={mobileClasses} 
            links={mainLinks} 
          />
          <MainMenu 
            id="menu" 
            classes={menuClasses} 
            links={mainLinks} 
          />
        </nav>
      </div>
    </header>
  )
}
