import { MemoryRouter } from 'react-router';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/shared/theme';

const StoryDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>{storyFn()}</MemoryRouter>
  </ThemeProvider>
);

export default StoryDecorator;
