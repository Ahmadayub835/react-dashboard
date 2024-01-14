import React from 'react'

function NavItem({nav }) {
  return (
    <li className='nav-item'>
        <a href="#" className='nav-link py-[10px] px-[15px] text-[#4154f1] hover:bg-[#F6F9FF] duration-200'>
            <i className={`${nav.icon} text-[16px] mr-[10px]`}></i>
            <span className='font-[600]'>{nav.name}</span>
        </a>
    </li>

  )
}

export default NavItem