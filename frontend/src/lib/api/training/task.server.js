const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000";

/**
 * GET all tasks for domain + duration (SSR)
 */
export async function getTasksByDurationSSR(
  domainIdentifier,
  durationIdentifier
) {
  const res = await fetch(
    `${API_BASE}/api/training/task/${domainIdentifier}/${durationIdentifier}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const json = await res.json();
  return json.data;
}

/**
 * GET single task (SSR)
 */
export async function getTaskSSR(
  domainIdentifier,
  durationIdentifier,
  taskIdentifier
) {
  const res = await fetch(
    `${API_BASE}/api/training/task/${domainIdentifier}/${durationIdentifier}/${taskIdentifier}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return json.data;
}
