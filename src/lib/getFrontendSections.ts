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

  const rootMetaRaw = await fs.readFile(rootMetaPath, "utf-8");
  const rootMeta = JSON.parse(rootMetaRaw) as MetaJson;

  const folderNames = rootMeta.pages.filter((p) => p !== "index");

  const sections: Section[] = [];

  for (const folderName of folderNames) {
    const folderMetaPath = path.join(contentDir, folderName, "meta.json");
    const folderMetaRaw = await fs.readFile(folderMetaPath, "utf-8");
    const folderMeta = JSON.parse(folderMetaRaw) as MetaJson;

    const count = folderMeta.pages.filter((p) => p !== "index").length;

    sections.push({
      slug: folderName,
      label: folderMeta.title,
      count,
    });
  }

  return sections;
}
