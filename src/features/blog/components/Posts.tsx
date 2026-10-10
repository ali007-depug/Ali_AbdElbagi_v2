import Image from "next/image";
import {Link} from "@/../i18n/navigation";
import type { TypeBlog } from "@/types/contentful";

type BlogPost = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">;

export default function Posts({ data }: { data: BlogPost[] }) {
  if (data.length === 0) {
    return <p className="text-center text-gray-200 py-10">No posts yet.</p>;
  }

  const [featured, ...rest] = data;
  const featuredImage = featured.fields.media?.fields.file?.url;

  return (
    <div className="space-y-8">
      {/* featured post */}
  <Link
  href={`/blog/${featured.fields.slug}`}
  locale={featured.sys.locale}
  className="group relative flex flex-col overflow-hidden rounded-2xl bg-p-color text-start md:flex-row md:items-center md:p-4 gap-4 md:h-52 lg:h-auto"
>
  {/* Left: Image Container */}
  <div className="relative w-full aspect-1200/660  overflow-hidden rounded-xl md:w-[45%] shrink-0 bg-[#2e5b41]">
    {featuredImage && (
      <Image
        src={`https:${featuredImage}`}
        alt={featured.fields.title}
        fill
        sizes="(min-width: 768px) 45vw, 100vw"
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        priority
      />
    )}
  </div>
        <div className="flex flex-1 flex-col justify-center gap-3 p-6 md:p-8">
          <span className="w-fit rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400">
            Latest
          </span>
          <h2 className="text-2xl font-extrabold text-white text-balance md:text-3xl">
            {featured.fields.title}
          </h2>
          <p className="text-gray-200 line-clamp-3">{featured.fields.description}</p>
          {featured.fields.date && (
            <p className="mt-2 text-sm text-gray-100">
              🗓️{" "}
              {new Date(featured.fields.date).toLocaleDateString(featured.sys.locale, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          )}
        </div>
      </Link>

      {/* remaining posts */}
      {rest.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => {
            const imageUrl = post.fields.media?.fields.file?.url;

            return (
              <Link
                key={post.sys.id}
                href={`/blog/${post.fields.slug}`}
                locale={post.sys.locale}
                className="group flex flex-col overflow-hidden rounded-xl odd:bg-s-color/50 even:bg-bg-color/20 text-start transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  {imageUrl && (
                    <Image
                      src={`https:${imageUrl}`}
                      alt={post.fields.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
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
      )}
    </div>
  );
}