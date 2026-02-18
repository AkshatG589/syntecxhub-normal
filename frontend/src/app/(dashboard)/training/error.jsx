"use client";

import ErrorState from "@/components/ui/ErrorState";

export default function TrainingCatalogError({ error, reset }) {
  return (
    <ErrorState 
      error={error} 
      reset={reset} 
      title="Unable to Load Training Catalog"
      description="We ran into a technical hitch while fetching our training programs. This usually happens due to a temporary connection issue."
      showHome={true}
    />
  );
}