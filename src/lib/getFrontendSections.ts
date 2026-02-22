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

export async function getFrontendSections(): Promise<Section[]> {
  const contentDir = path.join(process.cwd(), "content", "frontend");
  const rootMetaPath = path.join(contentDir, "meta.json");

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
