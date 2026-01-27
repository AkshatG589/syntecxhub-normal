const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* ---------------- INTERNAL FETCH ---------------- */
async function fetchAPI(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data.data;
}

/* =================================================
   GET MY ENROLLMENTS (SSR SAFE)
================================================== */
export async function getMyEnrollmentsServer(userId) {
  if (!userId) return [];
  return fetchAPI(`/api/training/enrollment/me?userId=${userId}`);
}
