"use client";
import React, { useState, useEffect } from 'react';

const VerifyOtpPage = () => {
  const [disabled, setDisabled] = useState(false); // Disable button initially
  const [seconds, setSeconds] = useState(180);      // Timer for 60 seconds
  const [resendDisabled, setResendDisabled] = useState(true); // Disable Resend Button initially

  useEffect(() => {
    // Start the countdown timer
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      
      return () => clearInterval(timer); // Clear timer on unmount
    } else {
      setDisabled(true);   // Disable the "Verify OTP" button when timer runs out
      setResendDisabled(false); // Enable "Resend OTP" button after timer ends
    }
  }, [seconds]);

  // Resend OTP Handler
  const handleResendOtp = () => {
    // Here, you'd typically send a request to the backend to resend the OTP.
    console.log('OTP resent');
    
    // Reset timer and button states
    setSeconds(60);
    setDisabled(false);   // Re-enable the "Verify OTP" button
    setResendDisabled(true); // Disable "Resend OTP" until the timer runs out again
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center h-screen'>
      {/* Main Content */}
      <div className='flex h-1/2 w-2/4 bg-gray-50 shadow-lg rounded-lg'>
        
        {/* Form Section */}
        <div className='flex flex-col justify-center items-center w-1/2 p-6'>
          <div className='text-center mb-6'>
            <h1 className='text-2xl font-bold text-blue-700'>Verify OTP</h1>
            <p className='text-gray-600 mt-2'>
              Enter the OTP sent to your email to verify your account
            </p>
            <p className='text-sm text-red-600 mt-1'>
              OTP expires in {seconds} seconds
            </p>
            <button 
              onClick={handleResendOtp} 
              disabled={resendDisabled}
              className={`mt-4 w-full bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 ${resendDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Resend OTP
            </button>
          </div>
          <div className='w-full max-w-lg'>
            <form>
              {/* OTP Input */}
              <div className='mb-4'>
                <label htmlFor='otp' className='block text-sm font-medium text-gray-700'>
                  OTP Code
                </label>
                <input
                  type='text'
                  id='otp'
                  placeholder='Enter OTP Code'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  disabled={disabled}  // Disable input when timer runs out
                />
              </div>

              {/* Submit Button */}
              <div className='mt-6'>
                <button
                  type='submit'
                  className={`w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  disabled={disabled} // Disable button when timer runs out
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center w-1/2'>
          <img
            src='/images/two factor.png'
            alt='Verify OTP Icon'
            className='max-w-full max-h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
