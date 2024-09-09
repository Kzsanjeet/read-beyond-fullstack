"use client";

import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProviderPersonRegister from "@/app/pComponent/ProviderPersonRegister";

const RegisterPage = () => {
  const [selectRole, setSelectRole] = useState("Select Role");

  // Function to return the correct component based on role selection
  const chooseRole = () => {
    if (selectRole === "person") {
      return <ProviderPersonRegister />;
    } else if (selectRole === "institution") {
      return (
        <div className="bg-white p-6 shadow-md rounded-md max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Institution Registration Form</h2>
          {/* Add institution form fields here */}
        </div>
      );
    } else {
      return null; // Render nothing if no valid role is selected
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Register</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-row h-1/2 w-1/2 bg-gray-50 shadow-lg rounded-lg">
        {/* Conditionally render the role selection or the registration form */}
        {selectRole === "Select Role" ? (
          <div className="flex flex-col items-center justify-center p-6 w-1/2">
            <div className="bg-white p-6 shadow-md rounded-md w-full max-w-sm">
              <div className="space-y-4">
                <h1 className="font-semibold ml-1">Are you a Person or Institution?</h1>
                <div>
                  <Select onValueChange={(value) => setSelectRole(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="institution">Institution</SelectItem>
                      <SelectItem value="person">Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">{chooseRole()}</div>
        )}

        {/* Image Section */}
        <div className="flex justify-center items-center w-1/2">
          <img src="/images/password.png" alt="Password Icon" className="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
