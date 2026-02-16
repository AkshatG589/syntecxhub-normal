// src/lib/api/training/enrollment.server.js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function completeEnrollmentAction(domainSlug) {
  const cookieStore = await cookies();
  
  // Set the "Success Guard" cookie
  cookieStore.set("enrollment_confirmed", "true", {
    maxAge: 60, // 5 minutes
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  // Redirect to success page
  redirect(`/training/${domainSlug}/apply/success`);
}