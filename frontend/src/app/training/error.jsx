"use client";

import { TrainingError } from "@/components/training";

export default function Error({ error, reset }) {
  return <TrainingError error={error} reset={reset} />;
}
    