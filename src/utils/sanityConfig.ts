import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "hktnmaz3",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true
});


// {
//   "version": 2,
//   "rewrites": [
//     { "source": "/studio/(.*)", "destination": "/studio/$1" },
//     { "source": "/(.*)", "destination": "/pages/$1" }
//   ]
// }