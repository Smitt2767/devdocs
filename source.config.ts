import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { z } from "zod";

const extendedPageSchema = pageSchema.extend({
  audio: z.string().optional(),
  image: z.string().optional(),
});

export const docs = defineDocs({
  dir: "content",
  docs: {
    schema: extendedPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {},
});
