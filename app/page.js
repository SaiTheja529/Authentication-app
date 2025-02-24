"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center w-96">
        {session ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800">Welcome, {session.user.name}!</h2>
            <p className="text-gray-600 mb-4">Signed in as <span className="font-medium">{session.user.email}</span></p>
            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sign In</h2>
            <p className="text-gray-600 mb-4">Choose a provider to sign in:</p>
            <div className="space-y-3">
              <button
                onClick={() => signIn("github")}
                className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Sign in with GitHub
              </button>
              <button
                onClick={() => signIn("google")}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign in with Google
              </button>
              <button
                onClick={() => signIn("twitter")}
                className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-300"
              >
                Sign in with Twitter
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
