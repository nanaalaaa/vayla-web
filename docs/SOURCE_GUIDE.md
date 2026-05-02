# Source code guide (VAYLA Arena admin)

This document describes how the frontend is organized and how to extend it: new routes, feature areas, and API wiring.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **React Router** for URLs; **`@loadable/component`** for route-level code splitting
- **TanStack React Query** (`QueryClient` in `AppProviders`) for server state (hooks can call APIs and use `useQuery` / `useMutation`)
- **Tailwind CSS** for styling; shared primitives under `src/components/ui/`

## Top-level layout

| Path | Role |
|------|------|
| `src/main.tsx` | Entry; calls `bootstrap()` |
| `src/bootstrap.tsx` | Initial render (flash screen), async setup, then mounts the app under `AppProviders` + `ErrorBoundary` |
| `src/AppV2.tsx` | Router: wraps content in `DashboardLayoutV2`, registers all routes from `routes`, `NotFoundPage` for unknown paths |
| `src/providers/AppProviders.tsx` | `StrictMode`, `QueryClientProvider`, `BrowserRouter` |
| `src/routes/index.tsx` | **Route table**: loadable page components, paths, metadata (`title`, `breadcrumb`, `show` for sidebar), nested `children`, `PAGE_ID_TO_PATH` |
| `src/types/navigation.ts` | **`PageId` union** — every routable page must have a matching id here |
| `src/config/navigation.ts` | Top-level nav items and Discovery feature cards (labels, icons, copy) |

Path alias: imports use `@/` → `src/` (see `tsconfig` paths).

## Feature module pattern

Each product area lives under `src/features/<name>/`:

```
features/<name>/
  pages/           # Route-level screens (default export React components)
  components/      # UI specific to this feature
  apis/            # Async functions that call the backend (fetch/axios)
  endpoints/       # URL path constants / builders
  hooks/           # React Query hooks or custom hooks (barrel `index.ts`)
```

Examples today: `dashboard`, `discovery`, `boost`.

Shared cross-feature UI lives in `src/share/components/` (e.g. `ErrorBoundary`, `NotFoundPage`, `PageTransitionMotion`).

## Routing and navigation

1. **`routes/index.tsx`** defines `RouteConfig`: `path`, `pageId`, `label`, `title`, `breadcrumb`, `show`, optional `children`, and `component`.
2. **`flattenRoutes()`** turns nested `children` into absolute paths (e.g. `/discovery/track-review`).
3. **`PAGE_ID_TO_PATH`** maps each `pageId` to its URL — used by `AppV2` for `onNavigate(pageId)` → `navigate(PAGE_ID_TO_PATH[id])`.
4. **`SidebarV2`** only lists routes where `show: true` and `section` is set. Hidden routes (e.g. detail/edit) stay out of the sidebar but remain reachable by URL or in-app navigation.
5. **`HeaderV2`** resolves the current route from `pathname` and shows `title` + `breadcrumb`.

When you add a route, keep **`pageId` unique** and aligned with **`PageId`** in `types/navigation.ts`.

## Adding a new page

1. **Pick a feature folder** (or create a new feature — see below). Add a page component under `features/<feature>/pages/YourPage.tsx` (default export).
2. **Extend `PageId`** in `src/types/navigation.ts` with a new string literal for your page.
3. **Register the route** in `src/routes/index.tsx`:
   - Import the page with `loadable(() => import("..."), { fallback })` (same pattern as existing pages).
   - Add a `RouteConfig` object with `path`, `pageId`, labels, `title`, `breadcrumb`, `show`, and `component`.
   - For nested URLs, add a `children` entry under the parent route with a **relative** `path` segment.
4. **Sidebar / Discovery hub (optional)**:
   - Set `show: true` and `section` if the page should appear in the main sidebar.
   - For Discovery-style tiles, add an entry to `DISCOVERY_FEATURES` in `src/config/navigation.ts` (and wire navigation from `DiscoveryPage` or the hub you use).

Use **`onNavigate?: (id: PageId) => void`** on pages that need programmatic navigation without importing the router; `AppV2` injects it via `NavigatableRoute`.

## Adding a new feature (new product area)

1. Create `src/features/<newFeature>/` with `pages/`, `components/`, `apis/`, `endpoints/`, and `hooks/` as needed.
2. Add a **parent route** in `routes/index.tsx` (similar to `/discovery` or `/boost`) with `path: "/<newFeature>"`, a landing `pageId`, and `children` for sub-pages.
3. Register all **`PageId`** values and loadable components.
4. Add a **top-level nav item** in `src/config/navigation.ts` (`NAV_ITEMS`) if the feature should appear in the sidebar (and ensure the parent route has `show: true` + `section`).

## Adding or wiring APIs

1. **Endpoints** — In `features/<feature>/endpoints/<feature>Endpoints.ts`, define path strings or small builders (see `BOOST_ENDPOINTS`, `DISCOVERY_ENDPOINTS`, `DASHBOARD_ENDPOINTS`). Keeps URLs in one place.
2. **API layer** — In `features/<feature>/apis/<feature>Api.ts`, export async functions (e.g. `fetchX`, `createY`) that perform `fetch` (or your HTTP client) against those endpoints. Parse JSON and return typed data.
3. **Hooks** — Prefer TanStack Query in `features/<feature>/hooks/` (e.g. `useBoostProjects()` using `useQuery` + `fetchBoostProjects`). Re-export from `hooks/index.ts` for a stable public surface.
4. **Use in UI** — Call hooks from page or feature components; handle loading/error states from query results.

Until the backend exists, API functions can remain stubs; the structure above stays the same when you plug in real requests.

## Shared UI and data

- **`src/components/ui/`** — Buttons, cards, tables, badges, etc. Reuse before adding one-off markup.
- **`src/lib/utils.ts`** — `cn()` for class names (Tailwind).
- **`src/data/`** — Static or mock datasets (e.g. dashboard KPI copy) used by pages for demos.

## Conventions

- **Imports**: `@/...` from `src`.
- **Pages**: default export; route components may receive `onNavigate` from the router wrapper.
- **Code splitting**: every route target uses dynamic `import()` via `@loadable/component` in `routes/index.tsx`.
- **Types**: extend `PageId` whenever you add a navigable page id used in config or `onNavigate`.

## Quick checklist (new screen)

- [ ] Page component under `features/.../pages/`
- [ ] New `PageId` in `types/navigation.ts`
- [ ] `loadable` import + `RouteConfig` in `routes/index.tsx`
- [ ] `show` / `section` / `breadcrumb` / `title` set as needed
- [ ] Optional: `NAV_ITEMS` or `DISCOVERY_FEATURES` + in-app links
- [ ] Optional: `endpoints` → `apis` → `hooks` → UI
