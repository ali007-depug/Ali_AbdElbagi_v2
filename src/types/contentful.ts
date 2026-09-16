// types/contentful.ts

/**
 * Shape of the "media" field returned by Contentful's SDK when an
 * asset is linked and resolved (via `include`).
 */
export interface ContentfulAsset {
  fields: {
    title?: string;
    file: {
      url: string;
      details?: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
}

/**
 * Fields on the "author" content type, linked from a blog post.
 * Update to match your Contentful "author" model exactly.
 */
export interface AuthorFields {
  name: string;
  bio: string;
  media: ContentfulAsset;
  github?: string;
}

/**
 * A fully-typed author entry, as returned when a blog post's
 * "author" reference field is resolved (via `include`).
 */
export interface Author {
  sys: {
    id: string;
    [key: string]: unknown;
  };
  fields: AuthorFields;
}

/**
 * Fields on your "blog" content type.
 * Update this to match your Contentful model exactly — these are based
 * on the fields you're already using in Posts.tsx, getPostById, and
 * the blog post page.
 */
export interface BlogPostFields {
  title: string;
  slug: string;
  description: string;
  date: string;
  content: string; // markdown string, rendered by MarkdownRendering
  tag?: string;
  media?: ContentfulAsset;
  author?: Author;
}

/**
 * A fully-typed blog post entry, for use anywhere you fetch one
 * from Contentful (getAllPosts, getPostById, getPostByEntryId, etc).
 */
export interface BlogPost {
  sys: {
    id: string;
    [key: string]: unknown;
  };
  fields: BlogPostFields;
}