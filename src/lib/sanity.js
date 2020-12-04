import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "pavz3fta",
  dataset: "production",
  useCdn: true,
  token: process.env.SANITY_KEY || process.env.REACT_APP_SANITY_KEY
});

export default client