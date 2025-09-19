# Copilot Instructions for In_Browser_editor

## Project Overview
This is a React + Vite project for an in-browser document editor. The architecture is component-based, with major UI elements in `src/` and static assets in `public/` and `src/assets/`. The project uses Vite for fast development and HMR, and ESLint for code quality.

## Key Components & Data Flow
- **App.jsx**: Main entry point, sets up global layout and routing.
- **Document.jsx, Editor.jsx, Header.jsx, Navbar.jsx**: Core UI components. Document editing logic is primarily in `Editor.jsx` and `Document.jsx`.
- **BurgerClass.js**: Contains reusable logic or classes (e.g., for menu/burger UI).
- **data.json**: Stores sample or persistent data for the editor.
- **main.jsx**: React root rendering and Vite integration.

## Developer Workflows
- **Start Dev Server**: `npm run dev` (uses Vite)
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint**: `npm run lint` (uses ESLint, config in `eslint.config.js`)
- No test scripts or test framework detected.

## Project-Specific Patterns
- **Component Structure**: All React components are in `src/`, use `.jsx` extension, and follow functional component style.
- **Styling**: CSS files (`App.css`, `index.css`) are imported directly into components.
- **Assets**: SVGs and icons are stored in both `public/` and `src/assets/`. Use relative imports for assets in `src/assets/`.
- **Data**: Use `data.json` for mock or persistent data. Access via import in JS/JSX files.

## Integration Points
- **Vite Plugins**: Uses official React plugin for HMR and Fast Refresh.
- **ESLint**: Configured via `eslint.config.js`.
- **No backend/server code**: All logic is client-side.

## Conventions
- Prefer named exports for components.
- Use functional components and hooks (no class components).
- Keep UI logic in component files; reusable logic in separate JS files (e.g., `BurgerClass.js`).
- Place global styles in `index.css`, component-specific styles in their respective CSS files.

## Example Patterns
- Importing assets: `import logo from './assets/logo.svg';`
- Using data: `import data from './data.json';`
- Component structure:
  ```jsx
  export function Header() { /* ... */ }
  ```

## References
- See `README.md` for Vite/React setup details.
- See `eslint.config.js` for linting rules.
- See `vite.config.js` for build configuration.

---
For questions or unclear conventions, review the referenced files or ask for clarification.
