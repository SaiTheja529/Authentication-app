"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/signin");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center transform transition-all hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {session.user.name}!</h2>
      <button 
        onClick={() => signOut()} 
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
      >
        Sign Out
      </button>
    </div>
  </div>
  
  );
}
