# CUE Design System

Design tokens extracted from the CUE Figma file, wired up for [Storybook](https://storybook.js.org/).

## What's in here

| Path | What it is |
| --- | --- |
| `src/styles/tokens.css` | All design tokens as CSS custom properties (colors, typography, radius, spacing, shadow). |
| `src/styles/tokens.ts` | The same tokens as a typed TypeScript object, for use in code. |
| `src/stories/Foundations.mdx` | A Storybook Docs page that renders the palette and type scale as browsable panels. |
| `.storybook/preview.ts` | Loads `tokens.css` into every story and sets the brand background. |
| `.storybook/preview-head.html` | Loads the DM Sans web font. |

## Getting Storybook running

These files define the tokens, but Storybook itself needs to be installed with `npm`
(which can't run in the browser). Do this once on your computer:

```bash
# 1. Get the repo onto your machine
git clone https://github.com/leafilipo/Design-System.git
cd Design-System

# 2. Install dependencies
npm install

# 3. Add Storybook (auto-detects React, adds config + scripts)
npx storybook@latest init

# 4. Start it — opens in your browser at http://localhost:6006
npm run storybook
```

You'll then see a **Foundations / Design Tokens** entry in the sidebar with the palette,
typography, radius and spacing.

### Note on `preview.ts`

`storybook init` may generate its own `.storybook/preview.ts`. If it offers to overwrite,
keep the version in this repo (or merge them) — it's the one that imports `tokens.css`,
so the tokens show up in every story.

## Updating the tokens later

When the Figma file changes, regenerate `tokens.css` / `tokens.ts` / `Foundations.mdx`
rather than editing them by hand, so code stays in sync with design.
