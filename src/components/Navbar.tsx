import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='fixed flex items-center justify-between w-full px-6 py-4 bg-white shadow-lg'>
        <h1 className='text-3xl font-bold'>Fast Food</h1>
        <ul className='flex items-center gap-20'>
            <li><a className='text-base font-medium hover:text-orange-400' href="#">Home</a></li>
            <li><a className='text-base font-medium hover:text-orange-400' href="#">About</a></li>
            <li><a className='text-base font-medium hover:text-orange-400' href="#">Menu</a></li>
            <li><a className='text-base font-medium hover:text-orange-400' href="#">Contact</a></li>
            <MagnifyingGlassIcon className='w-8 h-8 cursor-pointer'/>

        </ul>

        <div className='cursor-pointer'>
            <span className='block h-1 m-auto my-1 bg-orange-600 w-7'></span>
            <span className='block h-1 m-auto my-1 bg-black w-7'></span>
            <span className='block h-1 m-auto my-1 bg-orange-600 w-7'></span>
        </div>
    </nav>
  )
}

export default Navbar