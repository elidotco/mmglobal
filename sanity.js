import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "b3618e6f",
  dataset: "production",
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: true,
});
