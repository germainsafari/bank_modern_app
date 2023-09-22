import { useState } from 'react';
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants'

function Navbar() {
  return (
    <nav className='w-full flex py-6' justify-between items-center navbar>
      <img src={logo} alt="hookbank" className='w-[124] h-[32px'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar