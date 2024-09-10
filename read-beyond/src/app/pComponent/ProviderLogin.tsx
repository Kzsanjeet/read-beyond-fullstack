"use client";

import React from 'react'
import toast from 'react-hot-toast';

const ProviderLogin = () => {

  const handleLogin = (e)=>{
    e.preventDefault()
    toast.success("Login successful")
    // toast.error("Unable to login")
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8  rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-blue-600">Welcom back !!!</h2>
          <p className="text-gray-600">Access your account by providing your login details</p>
        </div>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              onClick={(e)=>handleLogin(e)}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a href="/provider/forgot-password" className="text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/provider/register" className="text-blue-600 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderLogin
