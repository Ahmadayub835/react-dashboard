import React from 'react'
import NavMessage from './NavMessage'
import NavNotice from './NavNotice'
import NavAvatar from './NavAvatar'

function Nav() {
  return (
    <nav className='header-nav m-auto'>
        <ul className='flex items-center gap-[10px]'>
          <NavNotice />
          <NavMessage />
          <NavAvatar />
        </ul>
    </nav>
  )
}

export default Nav