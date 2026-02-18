import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

/* =================================================
   METADATA (SEO & ROBOTS)
================================================== */
export async function generateMetadata({ params }) {
  const { domainSlug } = await params;
  
  // 1. Check Access for Metadata
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("enrollment_confirmed");

  // If no cookie, we don't return success titles. 
  // Returning an empty object or basic robots allows the Root Layout 
  // metadata template ("%s | Syntecxhub") to fallback to the default.
  if (!hasAccess) {
    return {
      title: "Page Not Found", // This will render as "Page Not Found | Syntecxhub"
      robots: { index: false, follow: false },
    };
  }

  const readableDomain = domainSlug ? domainSlug.replace(/-/g, " ") : "Program";
  
  return {
    title: `Enrollment Success | ${readableDomain}`,
    description: `Congratulations! You have successfully enrolled in the ${readableDomain} training program at Syntecxhub.`,
    robots: { 
      index: false, 
      follow: false 
    }, 
  };
}

/* =================================================
   SUCCESS PAGE COMPONENT
================================================== */
export default async function SuccessPage({ params }) {
  const { domainSlug } = await params;

  // 1. ACCESS PROTECTION
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("enrollment_confirmed");

  if (!hasAccess) {
    notFound(); // Triggers the nearest not-found.jsx
  }

  const readableDomain = domainSlug
    ? domainSlug.replace(/-/g, " ")
    : "this program";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-100">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
          You Have Successfully Enrolled 🎉
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
          Congratulations! You are now officially enrolled in{" "}
          <span className="font-semibold capitalize text-blue-600">
            {readableDomain}
          </span>.
          <br />
          Our team will contact you shortly via email with further instructions and onboarding details.
        </p>

        {/* Next Steps Card */}
        <div className="bg-blue-50/50 rounded-2xl p-6 text-left mb-8 border border-blue-100">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            What happens next?
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>A confirmation email has been triggered to your inbox.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Our admissions team will review your profile and contact you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Access to the training dashboard will be provided via email.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {domainSlug && (
            <Link
              href={`/training/${domainSlug}`}
              className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-black transition-all shadow-md hover:shadow-lg active:scale-95 text-sm font-medium"
            >
              View Program Details
            </Link>
          )}

          <Link
            href="/training"
            className="px-8 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-sm"
          >
            Explore More Programs <ArrowRight size={16} />
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Having trouble? Contact support@syntecxhub.com
        </p>
      </div>
    </div>
  );
}