# AGENTS.md - PriceFeed Landing Page

## Commands
- `npm run dev` - Start dev server with HMR
- `npm run build` - Runs `tsc -b && vite build` (typecheck before build)
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build

## Deploy
- Deploys to Firebase Hosting (`pricefeed-external` project)
- Build output: `dist/`
- Deploy: `firebase deploy`

## Architecture
- **Stack**: React 19, TypeScript, Vite, CSS Modules
- **Routes**: `/` (ExternalAnalyticsPage), `/internal-analytics` (InternalAnalyticsPage)
- **Styling**: CSS Modules only (no Tailwind, no styled-components)
- **i18n**: i18next with en/ru/kk; translations in `src/locales/`
- **No test framework** - no Vitest/Jest installed

## TypeScript Config
- `tsconfig.app.json`: App source in `src/`, `verbatimModuleSyntax: true`
- `tsconfig.node.json`: Vite config only
- `tsc -b` is used in build (project references)

## Important Conventions
- Component files: `*.tsx` + `*.module.css` in same directory
- Icons: SVG components or `public/icons.svg` sprite
- Fonts: Google Fonts (Inter) loaded in `index.html`
