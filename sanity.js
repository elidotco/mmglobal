import { createClient } from "@sanity/client";

import React from "react";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "b3618e6f",
  dataset: "production",
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
