import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProviderPersonRegister = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [tempAdd, setTempAdd] = useState('');
  const [permanentAdd, setPermanentAdd] = useState('');
  const [number, setNumber] = useState('');
  const [citizenshipCard, setCitizenshipCard] = useState<File | null>(null); // File handling

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Create form data to handle both text fields and the file
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('tempAdd', tempAdd);
    formData.append('permanentAdd', permanentAdd);
    formData.append('number', number);
    if (citizenshipCard) {
      formData.append('citizenshipCard', citizenshipCard); // Append the file
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/provider/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file uploads
          },
        }
      );
      const data = response.data;
      setLoading(false);
      if (data.status === 'success') {
        console.log('Provider created:', data);
        router.push("http://localhost:4000/api/v1/provider/login")
      } else {
        setError(data.message);
      }
    } catch (err) {
      setLoading(false);
      setError('Failed to submit form');
    }
  };

  return (
    <div className="flex justify-center items-center h-full overflow-hidden">
      <div className="w-full max-w-lg rounded-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600">Normal Account</h1>
          <p className="text-gray-600">For freelancers, students, or individuals</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Firstname Lastname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Temporary Address */}
          <div className="mb-4">
            <label htmlFor="tempAddress" className="block text-sm font-medium text-gray-700">
              Temporary Address
            </label>
            <input
              type="text"
              id="tempAddress"
              placeholder="Current Address"
              value={tempAdd}
              onChange={(e) => setTempAdd(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Permanent Address */}
          <div className="mb-4">
            <label htmlFor="permAddress" className="block text-sm font-medium text-gray-700">
              Permanent Address
            </label>
            <input
              type="text"
              id="permAddress"
              placeholder="Permanent Address"
              value={permanentAdd}
              onChange={(e) => setPermanentAdd(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Contact number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* ID Document */}
          <div className="mb-6">
            <label htmlFor="idDocument" className="block text-sm font-medium text-gray-700">
              Citizenship Card
            </label>
            <input
              type="file"
              id="idDocument"
              onChange={(e) => setCitizenshipCard(e.target.files?.[0] || null)}
              className="mt-1 block w-full text-gray-500 border border-gray-300 file:bg-blue-600 file:text-white file:border-none file:p-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? 'Submitting...' : 'Send Request'}
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

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ProviderPersonRegister;
