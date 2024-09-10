import React from 'react'

const ProviderPersonRegister = () => {
  return (
    <div className="flex justify-center items-center h-full overflow-hidden">
      <div className="w-full max-w-lg rounded-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600">Normal Account</h1>
          <p className="text-gray-600">For freelancers, students, or individuals</p>
        </div>

        {/* Form */}
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Firstname Lastname" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Temporary Address */}
          <div className="mb-4">
            <label htmlFor="tempAddress" className="block text-sm font-medium text-gray-700">Temporary Address</label>
            <input 
              type="text" 
              id="tempAddress" 
              placeholder="Current Address" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Permanent Address */}
          <div className="mb-4">
            <label htmlFor="permAddress" className="block text-sm font-medium text-gray-700">Permanent Address</label>
            <input 
              type="text" 
              id="permAddress" 
              placeholder="Permanent Address" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input 
              type="text" 
              id="contact" 
              placeholder="Contact number" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* ID Document */}
          <div className="mb-6">
            <label htmlFor="idDocument" className="block text-sm font-medium text-gray-700">Citizenship Card</label>
            <input 
              type="file" 
              id="idDocument" 
              className="mt-1 block w-full text-gray-500 border border-gray-300 file:bg-blue-600 file:text-white file:border-none file:p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mb-4">
            Once you send the request, your details will be reviewed and a response email will be sent to your provided email within 2-6 working days.
          </p>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Request
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
        </form>
      </div>
    </div>
  )
}

export default ProviderPersonRegister
