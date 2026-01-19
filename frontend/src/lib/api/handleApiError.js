import { toast } from "sonner";

export function handleApiError(error) {
  if (error.response) {
    // Backend responded with 4xx or 5xx
    toast.error(
      error.response.data?.message || "Request failed"
    );
  } else if (error.request) {
    toast.error("Server not reachable");
  } else {
    toast.error("Something went wrong");
  }
}
