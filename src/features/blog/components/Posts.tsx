import Image from "next/image";
import {Link} from "@/../i18n/navigation";
import type { TypeBlog } from "@/types/contentful";

type BlogPost = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">;

export default function Posts({ data }: { data: BlogPost[] }) {
  return (
    <>
      {data.map((post, index) => {
        const imageUrl = post.fields.media?.fields.file?.url;

        return (
          <div
            key={post.sys.id}
            className="flex min-w-0 items-center odd:bg-s-color/50 rounded-md even:bg-bg-color/20 py-2.5 px-3 justify-center sm:gap-15 @container"
          >
            <Link
              href={`/blog/${post.fields.slug}`}
              locale={post.sys.locale}
              className="flex max-sm:flex-col gap-5 w-full items-center sm:justify-evenly group hover:bg-s-color/50 transition-all duration-150 ease-in-out"
            >
              {/* post details */}
              <div className="flex p-2 flex-col gap-2 w-full sm:w-[50%]">
                <p className="text-sky-400 text-2xl w-fit mx-auto">{index + 1}#</p>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]">
                    {post.fields.title}
                  </h3>

                  <p className="text-gray-200 @max-lg:text-sm text-ellipsis overflow-hidden">
                    {post.fields.description}
                  </p>
                </div>

                {post.fields.date && (
                  <p className="text-gray-100 text-sm">
                    🗓️{" "}
                    {new Date(post.fields.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>

              {/* post thumbnail */}
              <div className="max-sm:max-w-[90%] sm:w-[50%] md:w-[45%] lg:w-[35%] aspect-video border-2 border-sky-700 overflow-hidden rounded-lg max-sm:-order-1 group-hover:scale-105 transition-all duration-300 ease-out">
                {imageUrl && (
                  <Image
                    src={`https:${imageUrl}`}
                    alt={post.fields.title}
                    width={365}
                    height={200}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}