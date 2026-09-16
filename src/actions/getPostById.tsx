import { client } from "../lib/contentful";
import {getReadingTime} from "../lib/readingTime";

export default async function getPostById({ slug, locale }: { slug: string; locale: string }) {
  const response = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
    locale,
    include: 2,
  });

  const post = response.items[0];
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }
  const readingTime = getReadingTime(post.fields.content, locale);
  return { post, readingTime };
}
 

