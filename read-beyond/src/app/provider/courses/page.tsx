import ProviderContent from '@/app/pComponent/ProviderContent'
import ProviderNav from '@/app/pComponent/ProviderNav'
import Link from 'next/link';
import React from 'react'
import { MdAdd } from "react-icons/md";

const page = () => {
  return (
    <div>
      <ProviderNav/>
      <div className='float-right mr-80 mt-10 flex gap-3'>
        <Link href='/provider/courses/add-course'>
          <button className='bg-blue-500 pl-6 pr-6 pt-2 pb-2 rounded-md shadow-md shadow-blue-400 text-white flex justify-center items-center gap-2 hover:bg-blue-600'>Add Course <MdAdd className='w-6 h-6' /></button>
        </Link>
        <Link href="/provider/courses/add-topic">
          <button className='bg-blue-500 pl-6 pr-6 pt-2 pb-2 shadow-md shadow-blue-400 rounded-md text-white flex justify-center items-center gap-2 hover:bg-blue-600'>Add Topic <MdAdd className='w-6 h-6' /></button>
        </Link>
        <Link href="/provider/courses/add-video">
          <button className='bg-blue-500 shadow-md shadow-blue-400 pl-6 pr-6 pt-2 pb-2 rounded-md text-white flex justify-center items-center gap-2 hover:bg-blue-600'>Add Video <MdAdd className='w-6 h-6' /></button>
        </Link>
      </div>
      <ProviderContent/>
    </div>
  )
}

export default page
