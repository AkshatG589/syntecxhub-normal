import NotFound from "@/components/ui/NotFound";

export default function DomainNotFound() {
  return (
    <NotFound 
      code="404"
      title="Training Domain Not Found"
      description="The specific training domain you are looking for doesn't exist or may have been moved. Please check our list of active programs."
      homeLink="/training"
      showBack={true}
    />
  );
}