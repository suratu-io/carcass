import {
  addDecorator,
  addParameters,
  configure as storyConfigure,
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';
import './assets/index.css';

// Automatically import all files ending in *.stories.tsx
const context = require.context('./stories', true, /\.stories\.tsx$/);

addParameters({
  options: {
    theme,
    showPanel: true,
    isFullscreen: false,
    showAddonsPanel: true,
    panelPosition: 'right',
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\//,
    enableShortcuts: true,
  },
});

addDecorator(withKnobs);

storyConfigure((): void => context.keys().forEach(context), module);
