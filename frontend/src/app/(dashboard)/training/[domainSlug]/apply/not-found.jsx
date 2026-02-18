import NotFound from "@/components/ui/NotFound";

export default function ApplyNotFound() {
  return (
    <NotFound 
      code="404"
      title="Invalid Application Link"
      description="We couldn't find the specific training domain or duration you're looking for. Please go back to the training page and select a valid plan."
      homeLink="/training"
      showBack={true}
    />
  );
}