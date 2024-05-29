import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY!,
  environment: process.env.CONTENTFUL_ENV,
});

export async function fetchPage(slug: string) {
  const data = client.getEntries({
    content_type: "landingPage",
    include: 5,
    "fields.slug[match]": slug,
  });

  return data;
}

export async function fetchTrainingsPage() {
  const data = client.getEntries({
    content_type: "landingPage",
    include: 5,
    "fields.slug[match]": "trainings",
  });

  return data;
}

export async function fetchNavbar() {
  const data = client.getEntry("4RwDt7I5Y06R1J3tdV03Wd");

  return data;
}

export async function fetchFooter() {
  const data = client.getEntry("6bYy9WDP2TJwu8bMK4coVB");

  return data;
}

export async function fetchTeamMembers() {
  const data = client.getEntries({
    content_type: "author",
    include: 4,
  });

  return data;
}
