import { Entry, Asset } from 'contentful'
export const Blog = 'blog'
export interface Blog {
  //Blog
  /* my portfolio blog */
  readonly content?: string
  readonly date?: string
  readonly description?: string
  readonly media?: Asset
  readonly previewShortText?: string
  readonly slug?: string
  readonly tag?: ReadonlyArray<string>
  readonly title: string
}

