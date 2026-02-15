const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000";

/**
 * GET all durations (SSR)
 */
export async function getAllDurationsSSR() {
  const res = await fetch(
    `${API_BASE}/api/training/duration`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const json = await res.json();
  return json.data;
}

/**
 * GET durations by domain (SSR)
 */
export async function getDurationsByDomainSSR(identifier) {
  const res = await fetch(
    `${API_BASE}/api/training/duration/domain/${identifier}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const json = await res.json();
  return json.data;
}

/**
 * VALIDATE DOMAIN + DURATION MATCH (SSR)
 * Used on Apply page
 */
export async function validateDomainDurationSSR(domainSlug, durationSlug) {
  if (!domainSlug || !durationSlug) return null;

  const res = await fetch(
    `${API_BASE}/api/training/duration/validate/${domainSlug}/${durationSlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return json.data; // { domain, duration }
}
