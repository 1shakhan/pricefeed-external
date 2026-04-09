# GEMINI.md - PriceFeed Landing Page

## Project Overview
This project is a high-performance landing page for **PriceFeed**, a professional analytics tool for the Kaspi.kz marketplace. It is built using **React 19**, **TypeScript**, and **Vite**, with a strong focus on localization and modular styling.

### Key Technologies
- **Framework:** React 19 (Functional Components with Hooks)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Localization:** i18next (supports English, Russian, and Kazakh)
- **Styling:** CSS Modules (`*.module.css`)
- **Icons:** Custom SVGs and an external icons sprite

### Architecture
- `src/components/`: Modular UI components (Header, Hero, Benefits, Pricing, etc.).
- `src/locales/`: JSON translation files for i18n.
- `src/i18n.ts`: i18next configuration and language detection.
- `src/App.tsx`: Main layout and component orchestration.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
To compile TypeScript and build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Linting
To run ESLint and check for code quality issues:
```bash
npm run lint
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

## Development Conventions

### Coding Style
- **Components:** Prefer functional components and React hooks.
- **Styling:** Use CSS Modules for component-specific styles to avoid global namespace collisions.
- **Naming:** Follow standard React/TypeScript naming conventions (PascalCase for components, camelCase for functions/variables).

### Localization (i18n)
- All user-facing text must be externalized in `src/locales/`.
- Use the `useTranslation` hook from `react-i18next` to access translations.
- Supported languages: `en` (English), `ru` (Russian), `kk` (Kazakh). Default is `ru` (with browser detection).

### Assets
- **Images:** Located in `src/assets/`.
- **Icons:** Most icons are managed via a sprite in `public/icons.svg` or as standalone SVG components.
