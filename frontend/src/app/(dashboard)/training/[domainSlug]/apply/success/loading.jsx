import GridBackground from "@/components/ui/backgrounds/GridBackground";
import Spinner  from "@/components/ui/loader/Spinner"; // Using the spinner we made earlier

export default function SuccessLoading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <GridBackground />
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-gray-500 animate-pulse">Finalizing your enrollment...</p>
      </div>
    </div>
  );
}