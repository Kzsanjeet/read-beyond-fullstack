"use client";
import React, { useState } from 'react';

const page = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Form submission handler
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Submit the form or call the API to update the password
      console.log("Password changed successfully");
    }
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center h-screen'>
      {/* Main Content */}
      <div className='flex h-1/2 w-2/4 bg-gray-50 shadow-lg rounded-lg'>
        
        {/* Form Section */}
        <div className='flex flex-col justify-center items-center w-1/2 p-6'>
          <div className='text-center mb-6'>
            <h1 className='text-2xl font-bold text-blue-700'>Change Password</h1>
            <p className='text-gray-600 mt-2'>
              Enter your new password below
            </p>
          </div>
          <div className='w-full max-w-lg'>
            <form onSubmit={handleSubmit}>
              {/* New Password Input */}
              <div className='mb-4'>
                <label htmlFor='new-password' className='block text-sm font-medium text-gray-700'>
                  New Password
                </label>
                <input
                  type='password'
                  id='new-password'
                  placeholder='Enter New Password'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password Input */}
              <div className='mb-4'>
                <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  placeholder='Confirm New Password'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className='text-red-500 text-sm'>{error}</p>
              )}

              {/* Submit Button */}
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center w-1/2'>
          <img
            src='/images/reset password.png'
            alt='Change Password Icon'
            className='max-w-full max-h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default page
