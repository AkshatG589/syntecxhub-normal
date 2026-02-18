"use client";

import ErrorState from "@/components/ui/ErrorState";

export default function ApplyError({ error, reset }) {
  return (
    <ErrorState 
      error={error} 
      reset={reset} 
      title="Application Service Unavailable"
      description="We encountered an issue while validating your application request. This is likely a temporary connection problem."
      showHome={true}
    />
  );
}