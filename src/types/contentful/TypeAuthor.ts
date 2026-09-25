import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeAuthor'
 * @name TypeAuthorFields
 * @type {TypeAuthorFields}
 * @memberof TypeAuthor
 */
export interface TypeAuthorFields {
    /**
     * Field type definition for field 'name' (name)
     * @name name
     * @localized false
     */
    name?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'media' (media)
     * @name media
     * @localized false
     */
    media?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'bio' (bio)
     * @name bio
     * @localized false
     */
    bio?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'forSocialLinks' (for social links)
     * @name for social links
     * @localized false
     */
    forSocialLinks?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'author' (author)
 * @name TypeAuthorSkeleton
 * @type {TypeAuthorSkeleton}
 * @author 1zZuSVEcwcmLeX8suzseH8
 * @since 2026-03-26T20:41:00.583Z
 * @version 1
 */
export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
/**
 * Entry type definition for content type 'author' (author)
 * @name TypeAuthor
 * @type {TypeAuthor}
 * @author 1zZuSVEcwcmLeX8suzseH8
 * @since 2026-03-26T20:41:00.583Z
 * @version 1
 */
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

export function isTypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeAuthor<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'author'
}

export type TypeAuthorWithoutLinkResolutionResponse = TypeAuthor<"WITHOUT_LINK_RESOLUTION">;
export type TypeAuthorWithoutUnresolvableLinksResponse = TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeAuthorWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeAuthor<"WITH_ALL_LOCALES", Locales>;
export type TypeAuthorWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeAuthor<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeAuthorWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
