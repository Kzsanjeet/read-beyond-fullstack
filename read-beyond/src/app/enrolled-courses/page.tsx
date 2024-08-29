import React from 'react';
import EnrolledPaidCourse from '../pComponent/EnrolledPaidCourse';
import ProfileNav from '../pComponent/ProfileNav';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileNav />
      <div className="container mx-auto py-10 px-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Enrolled Courses</h2>
        <div className=" p-6 flex justify-around">
            <div className='flex justify-around'>
                    <h3 className="text-2xl font-medium text-indigo-600 mb-4">Paid Courses</h3>

                <h3 className="text-2xl font-medium text-indigo-600 mb-4">Free Courses</h3>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Page;
