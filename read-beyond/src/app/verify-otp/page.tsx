"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function Page() {
  const [input, setInput] = useState<string>("");
  const getToken = useSearchParams()
  const token = getToken.get("validate-token")  //this is the name of params of token
  const router = useRouter();

  // Handle form submission
  const handleChange = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // console.log(input)
    // console.log(token)

    // Validate token before making the API request
    if (typeof token === 'string') {
      try {
        const response = await axios.post(
          `http://localhost:4000/api/v1/user/validateToken-for-twofa`,
          { 
            token: token,
            otp: input
           }
        );
        const data = response.data;

        if (data.success) {
          alert('Login successful');
          router.push('/'); // Redirect to home page on success
        } else {
          alert('OTP verification failed');
        }
      } catch (error) {
        console.error('Error submitting OTP:', error);
        alert('An error occurred while submitting OTP. Please try again.');
      }
    } else {
      console.error('Token is not available or is not a string');
      alert('Invalid or missing token.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-blue-500 text-center text-xl font-semibold mb-6">
          Enter your OTP here:
        </h2>
        <div className="flex justify-center">
          <form onSubmit={handleChange}>
            <Input
              type="text"
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              className="h-12 border border-gray-300 rounded-lg text-center text-lg mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className='bg-blue-500 text-white hover:bg-blue-600 my-3 w-40 h-10 text-xl rounded-lg hover:text-2xl'
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
