import type { Preview } from '@storybook/react';

// Load the design tokens as CSS custom properties for every story.
import '../src/styles/tokens.css';
// If you have a global stylesheet / reset, import it here too:
// import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    // Let Storybook show color pickers for color-named args automatically.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // The design system is dark-surfaced, so preview on the brand surface.
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#1a1816' },
        { name: 'light', value: '#f2efea' },
      ],
    },
  },
};

export default preview;
import type { Preview } from '@storybook/react';

// Load the design tokens as CSS custom properties for every story.
import './tokens.css';
// If you have a global stylesheet / reset, import it here too:
// import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    // Let Storybook show color pickers for color-named args automatically.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // The design system is dark-surfaced, so preview on the brand surface.
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#1a1816' },
        { name: 'light', value: '#f2efea' },
      ],
    },
  },
};

export default preview;
