import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Nav from './navbar/Nav'

function Header() {
  return (
    <header 
    className='header bg-white flex sticky top-0 items-center transition-all duration-500 z-[997] h-[60px] shadow-sm pl-[20px]'>
        <Logo />
        {/* Logo */}
        <Searchbar />
        {/* Search bar */}
        <Nav />
        {/* nav */}
    </header>
  )
}

export default Header