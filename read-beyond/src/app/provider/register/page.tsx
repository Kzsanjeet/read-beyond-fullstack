"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProviderPersonRegister from "@/app/pComponent/ProviderPersonRegister";
import InstitutionRegister from "@/app/pComponent/InstitutionRegister";

const RegisterPage = () => {
  const [selectRole, setSelectRole] = useState("person"); // Default to 'person'

  // Function to return the correct component based on role selection
  const chooseRole = () => {
    if (selectRole === "person") {
      return <ProviderPersonRegister />;
    } else if (selectRole === "institution") {
      return <InstitutionRegister />;
    } else {
      return null; // Render nothing if 'select' or invalid role is selected
    }
  };
  

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-100 justify-center">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700 mt-4">Register as:</h1>

        {/* Role Selector */}
        <div className="flex justify-center items-center mt-2">
          <Select onValueChange={(value) => setSelectRole(value)} defaultValue={selectRole}>
            <SelectTrigger className="w-48 border-blue-700">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent> 
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="institution">Institution</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-3/4 w-2/3 bg-gray-50 shadow-lg rounded-lg">
        {/* Form Section */}
        <div className="flex justify-center items-center w-1/2 p-6">
          <div className="w-full">{chooseRole()}</div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-1/2">
          <img
            src="/images/sign up.png"
            alt="sign up icon"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
