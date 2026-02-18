"use client";
import ErrorState from "@/components/ui/ErrorState";

export default function SuccessError({ error, reset }) {
  return (
    <ErrorState 
      error={error} 
      reset={reset} 
      title="Confirmation Error"
      description="We couldn't verify your enrollment status. If you received a confirmation email, your application was successful!"
    />
  );
}