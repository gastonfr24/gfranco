import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ServiceCard({item}:any) {
  return (
    <div className="">
    <div className="p-3 lg:grid grid-cols-8">
      {/* Left */}
      <div className='col-span-4 m-6'>
      <p className='lg:text-2xl font-semibold text-skyblue-200 dark:text-skyblue-100'>
    {item.title}
      </p>
      <p className='text-sm lg:text-base mt-5 text-gray-300'>
      {item.subtitle}
      </p>
      <p className='mt-3 text-gray-300'>
      {item.content}
      </p>
      </div>
      {/* Right */}
      <div className='col-span-4'>
      <Image
    alt="mock up de portfolio - pagina web personal demo"
      src={item.thumbnail}
      className="object-cover scale-125 hidden lg:block"
    />
      </div>
        </div>
        </div>
  )
}

export default ServiceCard