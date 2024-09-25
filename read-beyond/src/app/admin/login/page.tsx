import AdminLogin from '@/app/pComponent/AdminLogin';
import ProviderLogin from '@/app/pComponent/ProviderLogin';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="flex h-3/4 w-2/3 bg-white shadow-lg rounded-lg">
        {/* Form Section */}
        <div className="flex justify-center items-center w-1/2 p-6">
          <div className="w-full">
            <AdminLogin />
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
