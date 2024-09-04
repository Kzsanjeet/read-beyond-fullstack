import React from 'react'
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
// import "@/app/specificcss/buttonHover.css"

const ProviderNav = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-slate-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">readBeyond</span>
            </Link>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/provider" className="mr-5 hover:text-gray-900">Dashboard</Link>
            <Link href="/provider/courses" className="mr-5 hover:text-gray-900">Courses</Link>
            <Link href="/provider/Users" className="mr-5 hover:text-gray-900">Users</Link>
            <Link href="/provider/analytics"  className="mr-5 hover:text-gray-900">Analytics</Link>
            </nav>
            <div className='flex items-center gap-2'>
                <input 
                    type="search" 
                    placeholder='Search...' 
                    className='border pl-3 p-2 rounded-md focus:outline-none w-full hover:bg-blue-100'
                /> 
                <span className='flex justify-center items-center bg-white p-3 rounded-md text-blue-700 hover:bg-blue-600 hover:text-white'>
                    <FaSearch id='providerSearch'/>
                </span>
            </div>
        </div>
    </header>
    </div>
  )
}

export default ProviderNav
