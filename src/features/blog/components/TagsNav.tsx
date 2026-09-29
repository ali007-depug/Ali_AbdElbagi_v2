import {Link} from "@/../i18n/navigation";
import { client } from "@/lib/contentful";
export default async function TagsNav({ locale }: { locale: string }) {
  const posts = await client.getEntries({
    content_type: "blog",
    order: ["-fields.date"],
    select: ["fields.tag"],
    locale,
  });

  const counts = new Map<string, number>();
  for (const post of posts.items) {
    const tags = post.fields.tag;
    if (!Array.isArray(tags)) continue;
    for (const tag of tags as string[]) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return (
    <>
      {[...counts].map(([tag, count]) => (
        <Link
          key={tag}
          locale={locale}
          href={`/blog/tags/${encodeURIComponent(tag)}`}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-sky-700 px-3 py-1.5 text-sm text-sky-400 transition-colors duration-300 hover:bg-sky-400 hover:text-p-color"
        >
          <span className="font-medium">#{tag}</span>
          <span className="text-xs text-gray-100">{count}</span>
        </Link>
      ))}
    </>
  );
}