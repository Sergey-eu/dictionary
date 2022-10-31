import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Sidebar } from './sidebar.component';

const props = {
  title: 'Favorites',
  theme: Sidebar.Themes.Dark,
  id: 'favorites'
};

test('Sidebar rendered with proper theme, title and children', () => {
  const { container } = render(<Sidebar.$ {...props} ><button>text</button></Sidebar.$>);
  expect(screen.getByText('Favorites')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('sidebar_dark');
});
