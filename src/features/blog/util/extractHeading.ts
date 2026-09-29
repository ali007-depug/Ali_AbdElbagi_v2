import GithubSlugger from "github-slugger"
type markdownText = string;
export function extractHeadingsFromMarkdown(markdownText: markdownText) {
  // 1. Guard Clause: Return empty array if content is missing or empty
  if (!markdownText) return [];


  // 2. Regular Expression: Find lines starting with ## or ###
  const headingRegex = /^(#{1,5})\s+(.+)$/gm;
  const headings = [];
  let match;

  const slugger = new GithubSlugger();
  // 3. Loop through every regex match found in the text
  while ((match = headingRegex.exec(markdownText)) !== null) {
    const level = match[1].length; // Counts hashes: '##' = 2, '###' = 3
    const text = match[2].trim();  // Extracts the heading title

    // 4. Slugify: Convert title into an anchor link ID (e.g. "My Title" -> "my-title")
    // const id = text
    //   .toLowerCase()
    //   .replace(/[^\w\s\u0600-\u06FF-]/g, '') // Keep Arabic & Latin chars, strip punctuation
    //   .trim()
    //   .replace(/\s+/g, '-');                // Replace spaces with hyphensces with hyphens

     const id = slugger.slug(text)
    // 5. Store structured heading object
    headings.push({ id, text, level });
  }

  return headings;
}