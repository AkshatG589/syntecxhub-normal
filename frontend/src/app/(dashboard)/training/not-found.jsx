import NotFound from "@/components/ui/NotFound";

export default function TrainingNotFound() {
  return (
    <NotFound 
      code="404"
      title="No Training Programs Found"
      description="It looks like the program or category you're looking for isn't available right now. You can explore all our current openings in the main training catalog."
      homeLink="/training"
      showBack={true}
    />
  );
}