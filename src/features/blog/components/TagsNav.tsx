import {Link} from "@/../i18n/navigation";
import { client } from "@/lib/contentful";
export default async function TagsNav({ locale }: { locale: string }) {
  // Fetch blog posts from the API
  const posts = await client.getEntries({
    content_type: "blog",
    order: ["-fields.date"],
    select: ["fields.tag"], // only download what you need

    locale,
  });

  const counts = new Map<string, number>();
  for (const post of posts.items) {
    const tags = post.fields.tag;
    if (!Array.isArray(tags)) continue; // posts without tags have no field
    for (const tag of tags as string[]) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return (
    <>
      {[...counts].map(([tag, count]) => (
        <Link
        locale={locale}
          key={tag}
          href={`/blog/tags/${encodeURIComponent(tag)}`}
          className="flex shrink-0 gap-2 items-center justify-between bg-white px-3 py-1.5 rounded-md hover:bg-gray-300 transition-colors duration-300"
        >
          <p className="text-p-color font-medium">{tag}</p>
          <p className="bg-p-color text-white text-xs font-semibold px-2 py-1 rounded-full">
            {count}
          </p>
        </Link>
      ))}
    </>
  );
}
