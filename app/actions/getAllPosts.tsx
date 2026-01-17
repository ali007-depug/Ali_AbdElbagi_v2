import { client } from "../lib/contentful";
export default async function getAllPosts({ locale }: { locale: string }) {
  const response = await client.getEntries({
    content_type: "blog",
    order: ["-fields.date"],
    locale,
  });
  return response.items;
}
