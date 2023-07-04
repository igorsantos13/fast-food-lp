"use client"
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Hero from './Hero'

type Props = {}

function Navbar({}: Props) {
    const [active, setActive] = useState(false)

  return (
    <nav className='fixed flex items-center justify-between w-full px-4 py-2 bg-white shadow-lg md:px-6 md:py-4'>
        <h1 className='text-3xl font-bold'>Fast Food</h1>

        {/* SE CLICADO!! */}
        {active ? (
            <ul className='fixed z-10 right-0 flex flex-col items-center justify-around w-full h-full bg-white top-16 gap-[-100px]'>
            <MagnifyingGlassIcon className='w-8 h-8 cursor-pointer'/>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Home</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">About</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Menu</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Contact</a></li>

        </ul>
        ) : (

            // padrao sem ter clicado
            <ul className='hidden md:flex md:items-center md:gap-20'>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Home</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">About</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Menu</a></li>
            <li><a className='mx-4 my-0 md:text-base md:font-medium hover:text-orange-400' href="#">Contact</a></li>
            <MagnifyingGlassIcon className='w-8 h-8 cursor-pointer'/>

        </ul>
        )}

        

       
            {active ? (
                <div className='block cursor-pointer ' onClick={()=>setActive(false)}>
                <span className='block h-1 m-auto my-1 bg-orange-600 w-7 translate-y-[8px] rotate-[45deg]'></span>
                <span className='block h-1 m-auto my-1 bg-black opacity-0 w-7'></span>
                <span className='block h-1 m-auto my-1 bg-orange-600 w-7 translate-y-[-8px] rotate-[-45deg]'></span>
                </div>
            ) : (

                //SEM TER CLICADO AINDA
                <div className='md:hidden md:cursor-pointer' onClick={()=> setActive(true)}>
            <span className='block h-1 m-auto my-1 bg-orange-600 w-7'></span>
            <span className='block h-1 m-auto my-1 bg-black w-7'></span>
            <span className='block h-1 m-auto my-1 bg-orange-600 w-7'></span>
        </div>
            )
        }
        
        
            
        
        
       
        
    </nav>
  )
}

export default Navbar