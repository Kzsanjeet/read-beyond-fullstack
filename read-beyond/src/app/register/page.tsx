"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // Correct import

const RegistrationForm = () => {
  const [allInput, setAllInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAllInput({ ...allInput, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { name, email, password, confirmPassword } = allInput;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Check if email and name are provided
    if (!email || !name) {
      alert("Please enter email and name");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        allInput
      );

      const data = response.data;

      if (data.success) {
        alert('Registration successful');
        router.push('/');
      } else {
        setError(data.message || "Unable to register");
      }
    } catch (err) {
      console.error("Error during registration:", err); // Log the error
      setError((err as Error).message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-4xl w-full mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={allInput.name}
                placeholder="Enter your Name"
                className="w-[400px]"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={allInput.email}
                placeholder="Enter your Email"
                className="w-[400px]"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={allInput.password}
                placeholder="Enter your Password"
                className="w-[400px]"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={allInput.confirmPassword}
                placeholder="Confirm your Password"
                className="w-[400px]"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
            <div className="mt-4">
              <button
                type="button"
                className="w-full py-2 flex items-center justify-center border border-blue-500 hover:border-blue-800 hover:border-2"
                style={{ borderRadius: "9999px" }}
              >
                <div className="flex items-center justify-center rounded-full bg-white p-1 mr-2">
                  <img
                    src="https://w7.pngwing.com/pngs/506/509/png-transparent-google-company-text-logo-thumbnail.png"
                    alt="Google Logo"
                    className="w-6 h-6"
                  />
                </div>
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="mt-4 text-center">
              <span>Already have an account? </span>
              <Link href="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 bg-blue-500 items-center justify-center">
          <img
            src="https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg"
            alt="Register Now"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
