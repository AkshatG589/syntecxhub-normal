"use client";

import ErrorState from "@/components/ui/ErrorState";

export default function TrainingError({ error, reset }) {
  return (
    <ErrorState 
      error={error} 
      reset={reset} 
      title="Program Data Load Failed"
      description="We had trouble fetching the details for this training program. Please try refreshing."
    />
  );
}