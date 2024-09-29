"use client";

import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';  // Use useRouter instead of useParams

const AdminLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter() // Use useRouter for routing

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    // console.log(formData)

    try {
      const response = await axios.post('http://localhost:4000/api/v1/admin/login', {email,password});

      if (!response || !response.data.success) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Login successful");
        router.push("/admin/dashboard"); // Correctly redirect using useRouter
      }
    } catch (error) {
      toast.error("Unable to login");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8  rounded-lg w-full max-w-md">

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-blue-600">Welcome back !!!</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
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
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading} // Disables the button when loading is true so that multiple request could not triggered
            >
              {loading ? "Logging in..." : "Login"}
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

export default AdminLogin;
