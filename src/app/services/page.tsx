import Services from '@/components/home/services/Services'
import Header from '@/components/services/header/Header'
import React from 'react'

function page() {
  return (
    <div className='bg-graydark px-24'>
      <Header/>
      <Services/>
    </div>
  )
}

export default page