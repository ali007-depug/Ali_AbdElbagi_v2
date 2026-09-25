// actions/getAllPosts.ts
import { client } from "@/lib/contentful";
import type { TypeBlogSkeleton } from "@/types/contentful.ts/TypeBlog";

export async function getAllPosts({
  locale,
  limit,
}: {
  locale: string;
  limit?: number;
}) {
  const res = await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    locale,
    order: ["-fields.date"],
    limit,
    include: 1,
  });

  return res.items;
}