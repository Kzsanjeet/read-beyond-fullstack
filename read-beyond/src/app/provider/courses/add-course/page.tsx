import AddCourse from '@/app/pComponent/AddCourse'
import Footer from '@/app/pComponent/Footer'
import ProviderNav from '@/app/pComponent/ProviderNav'
import React from 'react'



const page = () => {
  return (
    <div>
      <ProviderNav/>
      <AddCourse/>
      <Footer/>
    </div>
  )
}

export default page
