// src/lib/api/newsletter/newsletter.js
import api from "../axios";
import { handleApiError } from "../handleApiError";
import { toast } from "sonner";
/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(email) {
  if (!email) {
    handleApiError({ response: { data: { message: "Email is required" } } });
    return null;
  }

  try {
    const res = await api.post("/api/newsletter/subscribe", { email });
    toast.success("Subscribed successfully!");
    return res.data;

  } catch (error) {
    handleApiError(error);
    return null; // ✅ stop propagation
  }
}
