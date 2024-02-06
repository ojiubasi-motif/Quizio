import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='px-4'>
        <span className='flex justify-between items-center border-t-2 border-bodyColor'>
            <ul className='basis-2/6 font-bold text-textColor text-2xl flex items-center justify-start'>
                <li className='mr-4'>
                    <NavLink>
                        Privacy
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink>
                    Terms
                    </NavLink>
                </li>
            </ul>

            <ul className='font-bold text-2xl'>
                <li className=''>
                    English(USA)
                </li>
            </ul>
        </span>
    </footer>
  )
}

export default Footer