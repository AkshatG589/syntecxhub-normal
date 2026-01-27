import api from "../axios";
import { handleApiError } from "../handleApiError";

/**
 * GET all tasks for a domain + duration
 * GET /api/training/task/:domainIdentifier/:durationIdentifier
 */
export async function getTasksByDuration(
  domainIdentifier,
  durationIdentifier
) {
  try {
    const res = await api.get(
      `/api/training/task/${domainIdentifier}/${durationIdentifier}`
    );

    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
}

/**
 * GET single task by domain + duration + task
 * GET /api/training/task/:domainIdentifier/:durationIdentifier/:taskIdentifier
 */
export async function getTask(
  domainIdentifier,
  durationIdentifier,
  taskIdentifier
) {
  try {
    const res = await api.get(
      `/api/training/task/${domainIdentifier}/${durationIdentifier}/${taskIdentifier}`
    );

    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}
