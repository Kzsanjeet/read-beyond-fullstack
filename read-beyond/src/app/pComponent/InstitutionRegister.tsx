"use client"
import React from 'react';

const InstitutionRegister = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-8 rounded-lg w-full max-w-lg">
        <div className='flex justify-center flex-col items-center'>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Institution Account</h2>
            
            <p className="text-sm mb-6 text-gray-600">
            For companies or organizations looking to upload study materials.
            </p>
        </div>
    
        {/* Institution Name */}
        <div className="mb-4">
          <label htmlFor="institution-name" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="institution-name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            placeholder="Enter Institution Name"
          />
        </div>

        {/* Institution Email */}
        <div className="mb-4">
          <label htmlFor="institution-email" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="institution-email"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            placeholder="Enter Institution Email"
          />
        </div>

        {/* Institution Address */}
        <div className="mb-4">
          <label htmlFor="institution-address" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Address <span className="text-red-600">*</span>
          </label>
          <textarea
            id="institution-address"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            placeholder="Enter Institution Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="institution-contact" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Address <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            placeholder="Enter contact number"
          />
        </div>

        {/* Institution Registration Certificate */}
        <div className="mb-6">
          <label htmlFor="institution-certificate" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Registration Certificate <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="institution-certificate"
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:bg-blue-700 file:text-white file:border-0 file:py-2 file:px-4 focus:ring-blue-700 focus:border-blue-700"
          />
        </div>

        {/* Information Note */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Once you send the request, your details will be reviewed. A response will be sent to your provided email within 2-6 working days.
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800">
          Submit Registration
        </button>

        {/* Already Have Account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/provider/login" className="text-blue-700 hover:underline">
              Login here
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionRegister;
