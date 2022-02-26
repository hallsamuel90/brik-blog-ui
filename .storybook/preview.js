import { addDecorator } from '@storybook/react';
import StoryDecorator from './storyDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StoryDecorator);
