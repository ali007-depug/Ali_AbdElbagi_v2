import { client } from "@/lib/contentful";
import type { TypeBlogSkeleton } from "@/types/contentful";
export  async function fetchPostsByTag(tag: string, locale: string) {
  const response =
    await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
      "fields.tag[in]": [tag],
      locale: locale,
    });
  return response.items;
}
