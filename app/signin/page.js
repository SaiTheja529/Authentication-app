"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirect: true, // Redirect on success
      callbackUrl: "/dashboard", // Redirect user after login
    });

    if (result?.error) {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition duration-300 hover:scale-105"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
  
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
      >
        Sign In
      </button>
    </form>
  </div>
  
  );
}
