import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Client-side variables — must be prefixed with NEXT_PUBLIC_.
   * These are inlined into the browser bundle at build time.
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),

    NEXT_PUBLIC_ENVIRONMENT: z.enum(["local", "dev", "prod"]),
  },

  /*
   * Server-side variables — never sent to the browser.
   * Add secrets and server-only config here.
   */
  server: {},

  /*
   * What gets passed to the schema validators above.
   * Required by t3-env — maps each key to its process.env value.
   */
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  },

  /*
   * Skip validation during `next build` on CI when env vars
   * are injected at runtime (e.g. Vercel preview deployments).
   * Set SKIP_ENV_VALIDATION=1 in your CI environment to enable.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /*
   * Treat empty strings as undefined so z.string() catches them.
   * Without this, an empty NEXT_PUBLIC_SITE_URL="" passes validation.
   */
  emptyStringAsUndefined: true,
});
