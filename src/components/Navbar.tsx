import { navigations } from '@/constants'

import Link from 'next/link'

const Navbar = () => {
  return ( 
    <header className="z-10 flex items-center justify-between w-full">
      <nav className="max-w-[1440px] flex flex-row justify-between items-center">
        {navigations.map(nav => (
          <Link
            key={nav.name}
            href={nav.path}
            className='text-snow pr-[32px]'
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar