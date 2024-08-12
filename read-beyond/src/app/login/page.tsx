"use client"
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user/login', { email, password });

      const data = response.data; // Axios automatically parses JSON response

      if (data.success && !data.is2FAEnable) {
        alert('Login successful');
        router.push('/');
      } else if (data.success && data.is2FAEnable) {
        alert('OTP sent to your mail.');
        router.push(`/verify-otp?validate-token=${data.token}`);
      }
      
      console.log('Login successful', data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-2xl w-full mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              className="w-full py-2 bg-transparent text-black rounded flex items-center justify-center border border-blue-500 hover:border-blue-800 hover:border-2"
              style={{ borderRadius: '9999px' }}
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
            <div className="text-blue-600 mt-2">
              <span>Don't have an account?</span>
              <Link href="/register" className="hover:border-b-2 border-blue-500 ml-2">Sign Up</Link>
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
}

export default Login;
