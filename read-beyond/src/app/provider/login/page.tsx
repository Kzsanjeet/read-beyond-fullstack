import ProviderLogin from '@/app/pComponent/ProviderLogin';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      {/* Header
      <div className="text-center mb-6">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5z"></path>
          </svg>
          <span className="ml-3 text-xl text-blue-700 font-bold">readBeyond</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-700 mt-4">Login here</h1>
      </div> */}

      {/* Main Content */}
      <div className="flex h-3/4 w-2/3 bg-white shadow-lg rounded-lg">
        {/* Form Section */}
        <div className="flex justify-center items-center w-1/2 p-6">
          <div className="w-full">
            <ProviderLogin />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-1/2">
          <img
            src="/images/sign up.png"
            alt="Sign up icon"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
