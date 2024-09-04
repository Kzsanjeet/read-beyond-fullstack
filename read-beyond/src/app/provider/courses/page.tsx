import ProviderContent from '@/app/pComponent/ProviderContent'
import ProviderNav from '@/app/pComponent/ProviderNav'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProviderNav/>
      <div className='mx-32 flex flex-row justify-between'>
        <h1>Courses</h1>
        <button>Add Course</button>
      </div>
      <ProviderContent/>
    </div>
  )
}

export default page
