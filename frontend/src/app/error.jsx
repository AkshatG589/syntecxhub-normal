"use client";

import ErrorState from "@/components/ui/ErrorState";

export default function GlobalError({ error, reset }) {
  return (
    <ErrorState 
      error={error} 
      reset={reset} 
      title="Critical System Error"
    />
  );
}