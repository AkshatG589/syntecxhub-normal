import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default async function SuccessPage({ params }) {
  const { domainSlug } = await params;

  const readableDomain = domainSlug
    ? domainSlug.replace(/-/g, " ")
    : "this program";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You Have Successfully Enrolled 🎉
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Congratulations! You are now officially enrolled in{" "}
          <span className="font-semibold capitalize">
            {readableDomain}
          </span>.
          <br />
          Our team will contact you shortly with further instructions and onboarding details.
        </p>

        {/* Next Steps */}
        <div className="bg-gray-100 rounded-xl p-5 text-left mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">
            What happens next?
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✔️ Confirmation email will be sent</li>
            <li>📞 Our team may contact you</li>
            <li>📄 Training schedule and access details will follow</li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {domainSlug && (
            <Link
              href={`/training/${domainSlug}`}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              View Program Details
            </Link>
          )}

          <Link
            href="/training"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            Explore More Programs <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </div>
  );
}
