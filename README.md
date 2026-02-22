# FrontCore

<p align="center">
  <img src="public/favicon.svg" alt="FrontCore logo" width="64" height="64" />
</p>

<p align="center">
  <strong>Frontend Engineering Handbook</strong> — <a href="https://frontcore.vercel.app/">Live site →</a>
</p>

A curated reference of frontend concepts built to understand the _why_ behind the how. Not just copy-paste patterns; browser internals, rendering pipelines, and system-level thinking.

**Content:** All documentation (MDX articles) in this project was created with [Claude](https://www.anthropic.com/claude) (Anthropic AI). The handbook is maintained as a personal reference and is openly shared.

## What's inside

Documentation is organized into **16 categories** under `/docs/frontend`:

| Category                             | Topics                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| **Rendering & Browser Pipeline**     | Hydration, SSR, concurrent rendering, critical path, compositing, render waterfalls |
| **Component & UI Architecture**      | Server Components, Suspense, edge rendering, Shadow DOM, error boundaries           |
| **State Management & Data Patterns** | Race conditions, optimistic UI, derived state, URL as state                         |
| **JavaScript Runtime & Async**       | Event loop, macrotasks/microtasks, AbortController, WebSockets vs SSE               |
| **Bundling & Code Delivery**         | Tree shaking, code splitting, module federation, monorepo tooling                   |
| **Caching & Storage**                | HTTP caching, IndexedDB, service workers, cache invalidation                        |
| **Networking & Protocols**           | HTTP/3 & QUIC, CORS, SameSite cookies, auth flows                                   |
| **Security**                         | CSP, Trusted Types, CSRF/XSS, dependency supply chain                               |
| **CSS & Layout**                     | Containment, layout thrashing, design tokens, responsive strategies                 |
| **Browser Observation APIs**         | IntersectionObserver, MutationObserver, PerformanceObserver, Long Tasks             |
| **Performance & Core Web Vitals**    | LCP, INP, CLS, FID, Lighthouse CI, RUM vs synthetic                                 |
| **Memory & Garbage Collection**      | Leak detection, detached DOM, GC timing                                             |
| **Concurrency & Workers**            | Web Workers vs Service Workers                                                      |
| **Accessibility**                    | Accessibility tree, ARIA live regions, focus management, keyboard patterns          |
| **DevX & Delivery**                  | Feature flags, CI/CD, error tracking, i18n, design systems                          |
| **Architecture & Decision Making**   | ADRs, API contracts, framework selection, technical debt                            |

Content is written in **MDX** and driven by Fumadocs (search, sidebar, and docs layout included).

## Tech stack

- **Next.js** (App Router)
- **Fumadocs** — docs UI, MDX, and search
- **Tailwind CSS**
- **TypeScript**

## Getting started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The home page lists all categories; use **browse →** or go to `/docs/frontend` for the full sidebar.

**Preview without running locally:** [frontcore.vercel.app](https://frontcore.vercel.app/)

### Other commands

```bash
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint
```

## Project structure

| Path                             | Purpose                                                   |
| -------------------------------- | --------------------------------------------------------- |
| `content/frontend/`              | All MDX docs and section `meta.json` files                |
| `src/app/(home)/page.tsx`        | Landing page (category list + counts)                     |
| `src/app/docs/[[...slug]]/`      | Docs layout and dynamic doc pages                         |
| `src/lib/getFrontendSections.ts` | Reads `content/frontend` meta to build home page sections |
| `src/lib/source.ts`              | Fumadocs content source adapter                           |
| `source.config.ts`               | Fumadocs MDX/source config                                |

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev) — MDX and docs layout
- [Fumadocs Source API](https://fumadocs.dev/docs/headless/source-api) — customizing content loading
