import Services from '@/components/home/services/Services'
import Header from '@/components/services/header/Header'
import React from 'react'

export const metadata = {
  title: 'Gastón Franco | Servicios',
  description: 'Echa un vistazo a mis servicios de desarrollo web, marketing, diseño web y más.',
  keywords: "web design, blog, ecommerce, portfolio, diseño web, desarrollo web, web development",
}

function page() {
  return (
    <div className='bg-graydark px-10 lg:px-24'>
      <Header/>
      <Services/>
    </div>
  )
}

export default page