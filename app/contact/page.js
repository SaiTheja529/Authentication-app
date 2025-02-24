"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-6">Feel free to reach out to me anytime!</p>
        
        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-lg font-medium text-gray-700">Sai Theja</span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3">
            <Phone className="text-blue-500" />
            <span className="text-lg font-medium text-gray-700">+91 63050 47408</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center space-x-3">
            <Mail className="text-red-500" />
            <a href="mailto:saitheja@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">
              saitheja@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
