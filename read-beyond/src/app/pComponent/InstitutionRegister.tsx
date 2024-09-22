"use client"
import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const InstitutionRegister = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [document, setDocument] = useState<File|null> (null) // File handling

  const [loading,setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async(e:FormEvent) =>{
    // Handle form submission
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('address', address)
    formData.append("providerType", "Institution")
    if(document){
      formData.append("image", document)
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/provider/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          },
      })

      const data  = response.data;
      setLoading(false)
      if(data.success){
        console.log(data)
        router.push("/provider/login")
        toast.success("Registered successfully")
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      setLoading(false)
      toast.error("Server error")
    }

  }

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 rounded-lg w-full max-w-lg">
        <form action="" onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e)=> setName(e.target.value)}
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
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
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
                onChange={(e)=> setDocument(e.target.files?.[0] || null)}
              />
            </div>

            {/* Information Note */}
            <div className="mb-4">
              <p className="text-sm text-blue-700">
                Once you send the request, your details will be reviewed. A response will be sent to your provided email within 2-6 working days.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800"
            type='submit'
            >
              {loading? "Submitting..." : "Submit"}
            </button>

        </form>
        
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
