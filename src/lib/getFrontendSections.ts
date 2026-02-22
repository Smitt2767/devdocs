import fs from "fs/promises";
import path from "path";

export type Section = {
  slug: string;
  label: string;
  count: number;
};

type MetaJson = {
  title: string;
  pages: string[];
};

/**
 * Reads /content/frontend and builds sections from meta.json files.
 * - Root meta.json pages (excluding "index") = folder names.
 * - Each folder's meta.json: title → label, folder name → slug, pages count (excluding "index") → count.
 */
export async function getFrontendSections(): Promise<Section[]> {
  const contentDir = path.join(process.cwd(), "content", "frontend");
  const rootMetaPath = path.join(contentDir, "meta.json");

  // Read root meta.json — if this fails the entire content directory is broken
  let rootMeta: MetaJson;
  try {
    const raw = await fs.readFile(rootMetaPath, "utf-8");
    rootMeta = JSON.parse(raw) as MetaJson;
  } catch (err) {
    throw new Error(
      `Failed to read root content meta at "${rootMetaPath}". ` +
        `Ensure content/frontend/meta.json exists and is valid JSON.\n${err}`,
    );
  }

  const folderNames = rootMeta.pages.filter((p) => p !== "index");
  const sections: Section[] = [];

  for (const folderName of folderNames) {
    const folderMetaPath = path.join(contentDir, folderName, "meta.json");

    let folderMeta: MetaJson;
    try {
      const raw = await fs.readFile(folderMetaPath, "utf-8");
      folderMeta = JSON.parse(raw) as MetaJson;
    } catch (err) {
      // Warn and skip the section rather than crashing the whole page.
      // This way a single missing/malformed meta.json doesn't take down the site.
      console.warn(
        `[getFrontendSections] Skipping section "${folderName}" — ` +
          `could not read "${folderMetaPath}": ${err}`,
      );
      continue;
    }

    const count = folderMeta.pages.filter((p) => p !== "index").length;

    sections.push({
      slug: folderName,
      label: folderMeta.title,
      count,
    });
  }

  return sections;
}
