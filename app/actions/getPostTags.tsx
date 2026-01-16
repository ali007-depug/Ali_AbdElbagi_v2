import { client } from "../lib/contentful";
export default async function fetchPostsByTag(tag: string, locale: string) {
  const response = await client.getEntries({
    content_type: "blog",
    "fields.tag[in]": tag,
    locale: locale,
  });
  return response.items;
}
