import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAuthorSkeleton } from "./TypeAuthor";

/**
 * Fields type definition for content type 'TypeBlog'
 * @name TypeBlogFields
 * @type {TypeBlogFields}
 * @memberof TypeBlog
 */
export interface TypeBlogFields {
    /**
     * Field type definition for field 'title' (title)
     * @name title
     * @localized true
     * @summary the main post title
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (description)
     * @name description
     * @localized true
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'previewShortText' (previewShortText)
     * @name previewShortText
     * @localized true
     */
    previewShortText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'content' (content)
     * @name content
     * @localized true
     */
    content?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'date' (date)
     * @name date
     * @localized false
     */
    date?: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'media' (media)
     * @name media
     * @localized false
     */
    media?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'slug' (slug)
     * @name slug
     * @localized false
     */
    slug?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tag' (tag)
     * @name tag
     * @localized true
     */
    tag?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'author' (author)
     * @name author
     * @localized false
     */
    author?: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'blog' (Blog)
 * @name TypeBlogSkeleton
 * @type {TypeBlogSkeleton}
 * @author 1zZuSVEcwcmLeX8suzseH8
 * @since 2025-11-06T09:53:52.508Z
 * @version 35
 */
export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
/**
 * Entry type definition for content type 'blog' (Blog)
 * @name TypeBlog
 * @type {TypeBlog}
 * @author 1zZuSVEcwcmLeX8suzseH8
 * @since 2025-11-06T09:53:52.508Z
 * @version 35
 */
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export function isTypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeBlog<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'blog'
}

export type TypeBlogWithoutLinkResolutionResponse = TypeBlog<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogWithoutUnresolvableLinksResponse = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
