import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY!,
  environment: process.env.CONTENTFUL_ENV,
});

export async function fetchPage(slug: string) {
  const data = client.getEntries({
    content_type: "landingPage",
    include: 5,
    "fields.slug": slug,
  });

  return data;
}

export async function fetchTrainingSession(slug: string) {
  // @ts-expect-error
  const data = client.getEntries({
    content_type: "trainingSession",
    include: 5,
    "fields.slug": `/trainings/${slug}`,
    order: "sys.createdAt"
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
    content_type: "tamTeam",
    include: 5,
  });

  return data;
}

export async function fetchDirector() {
  const data = client.getEntries({
    content_type: "author",
    include: 5,
    "sys.id": "OFwhiD85591OImxjPs8ug",
  });

  return data;
}

export async function fetchCaseStudy(slug: string) {
  const data = client.getEntries({
    content_type: "caseStudy",
    include: 5,
    "fields.slug": `/sales/case-study/${slug}`,
  });

  return data;
}
