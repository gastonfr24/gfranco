import Image from 'next/image'
import React from 'react'
import style from './page.module.css'

function AboutCard({service}) {

  const conicBeforeStyle = {
    '--conic-before-bg': `conic-gradient(transparent, ${service.color}, transparent 30%)`,
  };

  return (
<div key={service.id} class={`${style.conic} w-full mx-auto lg:w-full py-4 my-6 lg:my-0`} style={conicBeforeStyle} >
<div class='pt-2'>
<Image src={service.image} alt={`imagen de ${service.title}`} className='w-[93%] mx-auto'/>
<div className='w-10/12 mx-auto mt-3'>
  <h1 className='text-base lg:text-xl text-gray-200 font-bold'>
      {service.title}
  </h1>
  <p className='text-gray-400 pt-4 pb-1 text-sm lg:text-base'>
    {service.description}
    </p>
</div>
</div>
</div>

  )
}

export default AboutCard

//hover:bg-[#27272A] bg-[#18181B]
//background-image: conic-gradient(transparent, #8adfe0, transparent 30%);