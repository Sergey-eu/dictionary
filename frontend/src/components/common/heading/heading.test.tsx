import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Heading } from './heading.component';

const props = {
  level: Heading.Levels.h3,
  className: 'text-class'
};

test('Heading rendered with appropriate tag, content and class name', () => {
  const { container } = render(<Heading.$ {...props} >text</Heading.$>);
  expect(screen.getByText('text')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('text-class');
});
