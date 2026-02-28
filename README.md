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

Documentation is organized into **14 categories** under `/docs/frontend`:

| Category                             | Topics                                                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **JavaScript Runtime & Async**       | Event loop, macrotasks/microtasks, promise combinators, async/await, AbortController, concurrency vs parallelism, Web Workers vs Service Workers |
| **Rendering & Browser Pipeline**     | Critical path, compositing, hydration strategies, streaming SSR, SSR vs SSG vs ISR, RSC model, concurrent rendering, fiber, reconciliation, View Transitions, image & font optimization, React 19 & React Compiler |
| **CSS & Layout**                     | CSS architecture, containment, container queries, layout thrashing, animation performance, design tokens, responsive strategies, scroll-driven animations |
| **Component & UI Architecture**      | Server Components, Suspense, error boundaries, compound components, headless UI, portals |
| **State Management & Data Patterns** | Derived vs redundant state, immutability, memoization pitfalls, URL as state, data fetching, race conditions, optimistic UI, idempotent UI actions, offline conflict resolution |
| **Bundling & Code Delivery**         | Tree shaking, code splitting, bundle analysis, preload/prefetch/priority hints, monorepo tooling |
| **Caching & Storage**                | HTTP caching, cache invalidation, CDN purging, service worker lifecycle, IndexedDB |
| **Networking & Protocols**           | HTTP/3 & QUIC, CORS & preflight, SameSite cookies, auth flows, REST vs GraphQL vs tRPC, WebSockets vs SSE vs long polling, client-side rate limiting, Navigation API |
| **Security**                         | CSRF/XSS mitigation, CSP, Trusted Types, secrets management, prototype pollution, dependency supply chain |
| **Performance & Core Web Vitals**    | LCP, CLS, INP, third-party scripts, RUM vs synthetic, performance budgets, Lighthouse CI, IntersectionObserver, MutationObserver, PerformanceObserver, Long Tasks API, Speculation Rules API |
| **Memory & Garbage Collection**      | GC timing, memory leak detection, detached DOM nodes, Chrome DevTools profiling                  |
| **Accessibility**                    | Accessibility tree, ARIA live regions, focus management, keyboard navigation, color contrast & motion |
| **DevX & Delivery**                  | CI/CD pipelines, feature flags, error tracking & observability, design system versioning, i18n architecture |
| **Architecture & Decision Making**   | Framework selection, API contract design, ADRs, technical debt identification & prioritization   |

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
