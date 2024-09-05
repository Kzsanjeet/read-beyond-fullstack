import AddVideo from '@/app/pComponent/AddVideo'
import Footer from '@/app/pComponent/Footer'
import ProviderNav from '@/app/pComponent/ProviderNav'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProviderNav/>
      <AddVideo/>
      <Footer/>
    </div>
  )
}

export default page
