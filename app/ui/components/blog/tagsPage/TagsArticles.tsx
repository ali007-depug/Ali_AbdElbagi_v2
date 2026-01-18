import fetchPostsByTag from "@/app/actions/getPostTags";
import Posts from "../Posts";
export default async function TagsArticles({
  tag,
  locale,
}: {
  tag: string;
  locale: string;
}) {
  // Fetch posts that have the specified tag
  const posts = await fetchPostsByTag(tag, locale);
  return <Posts data={posts} />;
}
