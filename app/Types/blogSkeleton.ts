import { EntrySkeletonType } from "contentful";
import { Blog } from "@/contentfulTypes";
/**
 * This is what Contentful SDK expects
 */
export type BlogSkeleton = EntrySkeletonType<
  {
    title: Blog["title"];
    slug: Blog["slug"];
    description: Blog["description"];
    date: Blog["date"];
    media: Blog["media"];
    tag: Blog["tag"];
  },
  "blog"
>;
