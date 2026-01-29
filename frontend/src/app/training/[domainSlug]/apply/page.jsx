// src/app/training/[domainSlug]/apply/page.jsx
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ApplyPage({ params, searchParams }) {
  // 1. Await the dynamic URL data (Next.js 15 requirement)
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { domainSlug } = resolvedParams;
  const durationSlug = resolvedSearchParams?.duration;

  // 2. Await the Clerk auth state
  const { userId } = await auth();

  // 🔴 SERVER-SIDE LOGS (Check your terminal)
  console.log("--- APPLY PAGE DEBUG ---");
  console.log("Domain:", domainSlug);
  console.log("Duration:", durationSlug);
  console.log("User ID:", userId ? userId : "Not Logged In");
  console.log("------------------------");

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md w-full border rounded-xl p-8 shadow-sm bg-white">
        <h1 className="text-3xl font-bold mb-6">Apply for Training</h1>

        <div className="space-y-3 mb-8 text-left bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            Selected Domain: <span className="font-mono font-bold text-blue-600">{domainSlug}</span>
          </p>
          <p className="text-gray-700">
            Selected Duration: <span className="font-mono font-bold text-blue-600">{durationSlug || "Not specified"}</span>
          </p>
        </div>

        {/* 3. Conditional Authentication UI */}
        {!userId ? (
          <div className="space-y-4">
            <p className="text-red-500 font-medium">
              You must be logged in to submit your application.
            </p>
            <div className="flex flex-col gap-3">
              <Link 
                href="/sign-in" 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login to Continue
              </Link>
              <Link 
                href="/sign-up" 
                className="text-blue-600 border border-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
              >
                Create an Account
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-green-600 font-medium mb-4">
              ✅ You are logged in!
            </p>
            <button className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:opacity-90">
              Submit Application
            </button>
          </div>
        )}
      </div>
    </section>
  );
}