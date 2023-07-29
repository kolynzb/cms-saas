import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/**
 * Get Markdown File Content
 * @param {[string]} fileName - name of file
 * @param {[string]} filePath - posts path
 */
export function getFileContentByPath(fileName: string, filePath: string) {
  const postFilePath = join(filePath, `${fileName}.md`);
  const fileContents = fs.readFileSync(postFilePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    data,
    content,
  };
}

import { remark } from "remark";
import html from "remark-html";

/**
 * Converts Markdown to HTML asynchronously
 * @param {[string]} markdown - name of file
 * @return {[Promise<string>]}
 */
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
