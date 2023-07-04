import React from 'react'
import Image from 'next/image'
import hero from '@/components/imagem.png'

type Props = {
  
}

function Hero({}: Props) {
  return (
    <section className='py-24 px-[2%] flex flex-col text-center overflow-hidden gap-20 md:flex md:flex-row md:text-start md:items-center md:justify-between md:w-full md:h-screen md:px-10'>
        <div className='max-w-xl'>
            <h4 className='mb-4 text-base text-orange-500'>Welcome to Fast Food</h4>
            <h1 className='mb-4 text-6xl'>Different spice for different tastes</h1>
            <p className='mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error veniam in voluptatem magni quisquam</p>
            <a className='py-4 font-medium text-white bg-orange-600 px-11 rounded-xl hover:bg-orange-900' href="#">Order Now!</a>
        </div>

        <div>
            <Image className='z-0 dropShadow' src={hero} alt='Hamburger photo' width={700} height={700}/>
        </div>
    </section>
  )
}

export default Hero