import AddTopic from '@/app/pComponent/AddTopic'
import Footer from '@/app/pComponent/Footer'
import ProviderNav from '@/app/pComponent/ProviderNav'
import React from 'react'

const page = () => {
  return (
    <div>
        <ProviderNav/>
        <AddTopic/>
        <Footer/>
    </div>
  )
}

export default page
