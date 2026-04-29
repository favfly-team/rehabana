/**
 * @typedef {{ uid: string, name: string }} BlogAuthor
 */

const normalizeAuthorName = (author) => author?.data?.name || author?.uid || "";

/**
 * Extracts authors from a Prismic `blog_post` document `data` object.
 * Supports both the new `authors` group field and the legacy `author` field.
 *
 * @param {any} data
 * @returns {BlogAuthor[]}
 */
export const getBlogAuthors = (data) => {
  const authorsFromGroup = Array.isArray(data?.authors)
    ? data.authors
        .map((item) => item?.author)
        .filter(Boolean)
        .map((author) => ({
          uid: author?.uid || "",
          name: normalizeAuthorName(author),
        }))
        .filter((author) => Boolean(author.uid || author.name))
    : [];

  const authorsFromLegacy =
    data?.author
      ? [
          {
            uid: data.author?.uid || "",
            name: normalizeAuthorName(data.author),
          },
        ]
          .filter((author) => Boolean(author.uid || author.name))
      : [];

  const combined = [...authorsFromGroup, ...authorsFromLegacy];
  const deduped = combined.filter((author, index) => {
    const key = author.uid || author.name;
    return combined.findIndex((a) => (a.uid || a.name) === key) === index;
  });

  return deduped.length > 0 ? deduped : [{ uid: "", name: "Rehabana Team" }];
};
