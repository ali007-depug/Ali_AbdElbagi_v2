import Image from "next/image";
import { Link } from "@/../i18n/navigation";
import type { TypeBlog } from "@/types/contentful";

type BlogPost = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">;

export default function RecentPosts({ data }: { data: BlogPost[] }) {
  if (data.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.map((post) => {
        const imageUrl = post.fields.media?.fields.file?.url;

        return (
          <Link
            key={post.sys.id}
            href={`/blog/${post.fields.slug}`}
            locale={post.sys.locale}
            className="group flex flex-col overflow-hidden rounded-xl bg-p-color text-start transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-video overflow-hidden">
              {imageUrl && (
                <Image
                  src={`https:${imageUrl}`}
                  alt={post.fields.title}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="font-bold text-white text-lg text-balance line-clamp-2">
                {post.fields.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2">
                {post.fields.description}
              </p>
              {post.fields.date && (
                <p className="mt-auto pt-2 text-xs text-gray-100">
                  🗓️{" "}
                  {new Date(post.fields.date).toLocaleDateString(post.sys.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}