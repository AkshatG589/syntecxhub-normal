// src/components/training/TrustStrip.jsx
"use client";

import {
  ShieldCheck,
  Layers,
  BadgeCheck,
  Laptop
} from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* GLOW BORDER WRAPPER */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-400/40 via-blue-600/60 to-blue-400/40 animate-gradient-x">
          
          {/* INNER BOX */}
          <div className="rounded-2xl bg-white shadow-md px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              <TrustItem
                icon={Layers}
                text="Skill-Focused Curriculum"
              />

              <TrustItem
                icon={Laptop}
                text="Hands-on Tasks & Projects"
              />

              <TrustItem
                icon={BadgeCheck}
                text="Verified Certificates"
              />

              <TrustItem
                icon={ShieldCheck}
                text="100% Online & Flexible"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TRUST ITEM ================= */

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>
      <p className="text-sm font-medium text-gray-700">
        {text}
      </p>
    </div>
  );
}
