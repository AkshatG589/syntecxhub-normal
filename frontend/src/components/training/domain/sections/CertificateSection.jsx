"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import ImageWithPlaceholder from "@/components/ui/ImageWithPlaceholder";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

export default function CertificateSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Award size={16} />
              Certification
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Industry-Recognized Certificate
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              On successful completion of the program, you’ll receive a
              verified certificate from <strong>Syntecxhub</strong> that
              validates your skills, training duration, and practical exposure.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Digitally verifiable certificate",
                "Mentor & organization seal",
                "Accepted for internships & academic credit",
                "Shareable on LinkedIn & resumes",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <ShieldCheck size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= CERTIFICATE IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <ImageWithPlaceholder
                src="/assets/images/certificate.png"
                alt="Sample Syntecxhub Training Certificate"
                width={900}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-xl"
              />
            </div>

            {/* Accent glow */}
            <div className="absolute -z-10 inset-0 blur-3xl bg-blue-100/60 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
