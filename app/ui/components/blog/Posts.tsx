import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Posts({ data }:any) {
  return data.map((post: any, index: number) => (
    <div
      key={post.sys.id} // Use Contentful system ID as unique key
      className="flex items-center odd:bg-s-color/50 rounded-md even:bg-bg-color/20 py-2.5 px-3 justify-center sm:gap-15 @container"
    >
      {/* post title + thumbnail + desc */}
      <Link
        href={`/blog/${post.fields.slug}`}
        className="flex max-sm:flex-col gap-5 w-full items-center sm:justify-evenly group hover:bg-s-color/50 transition-all duration-150 ease-in-out"
      >
        {/* post details */}
        <div className="flex p-2 flex-col gap-2 w-full sm:w-[50%] ">
          <p className="text-sky-400 text-2xl w-fit mx-auto">{index + 1}#</p>
          <div className="flex flex-col items-center gap-4">
            {/* Blog post title */}
            <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]">
              {post.fields.title}
            </h3>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-200 @max-lg:text-sm  overflow-ellipsis overflow-hidden whitespace-nowrp  ">
              {post.fields.description}
            </p>
          </div>

          {/* Publication date */}
          <p className="text-gray-100 text-sm">🗓️ {post.fields.date}</p>
        </div>
        {/* post thumbnail */}
        <div className="max-sm:max-w-[90%] sm:w-[50%] md:w-[45%] lg:w-[35%] aspect-video border-2 border-sky-700 overflow-hidden rounded-lg max-sm:-order-1 group-hover:scale-105 transition-all duration-300 ease-out">
          {post.fields.media && (
            <Image
              src={`https:${post?.fields.media.fields?.file?.url}`} // Contentful image URL
              alt={post.fields.title} // Use post title as alt text for accessibility
              width={365}
              height={200}
              className="w-full h-full object-cover" // Responsive image styling
              loading="eager"
            />
          )}
        </div>
      </Link>
    </div>
  ));

}
