"use react"
import React from 'react'

const page = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center h-screen'>
      {/* Main Content */}
      <div className='flex h-2/3 w-2/4 bg-gray-50 shadow-lg rounded-lg'>
        {/* Form Section */}
        <div className='flex flex-col justify-center items-center w-1/2 p-6'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold text-blue-700'>Forgot Password?</h1>
                <p className='text-gray-600 mt-2'>Enter your email address to reset your password</p>
            </div>
          <div className='w-full max-w-lg'>
            <form>
              {/* Email Input */}
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='you@example.com'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                />
              </div>

              {/* Submit Button */}
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  Reset Password
                </button>
              </div>
              <div className='mt-4'>
                <a href="/provider/login" className='text-blue-600 font-semibold hover:underline'>
                        Go to Login 
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center w-1/2'>
          <img
            src='/images/forgot password.png'
            alt='Forgot Password Icon'
            className='max-w-full max-h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default page
