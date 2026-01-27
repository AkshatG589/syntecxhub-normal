// src/lib/api/traning/domain.server.js

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* -----------------------------------------------
   INTERNAL FETCH (SSR)
   - Throws to activate error.jsx
------------------------------------------------ */
async function fetchSSR(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    let message = "API request failed";

    try {
      const err = await res.json();
      message = err.message || message;
    } catch {
      // ignore JSON parse failure
    }

    throw new Error(message);
  }

  const json = await res.json();
  return json.data;
}

/* =================================================
   GET ALL TRAINING DOMAINS (SSR)
================================================== */
export async function getAllDomainsSSR() {
  return fetchSSR("/api/training/domain");
}

/* =================================================
   GET SINGLE DOMAIN BY ID OR SLUG (SSR)
================================================== */
export async function getDomainSSR(identifier) {
  if (!identifier) {
    throw new Error("Domain identifier is required");
  }

  return fetchSSR(`/api/training/domain/${identifier}`);
}

/* =================================================
   RESOLVE DOMAIN BY SLUG (SSR)
================================================== */
export async function resolveDomainBySlugSSR(slug) {
  if (!slug) {
    throw new Error("Domain slug is required");
  }

  return fetchSSR(`/api/training/domain/resolve/${slug}`);
}

/* =================================================
   GET DOMAIN COUNT (SSR)
================================================== */
export async function getDomainCountSSR() {
  const data = await fetchSSR(
    "/api/training/domain/stats/count"
  );

  return data.count;
}
