import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, } from '@testing-library/react';

import { QuickLink } from './quick-link.component';

const props = {
  text: 'Indigo',
  dataTest: 'quick-link'
};

test('QuickLink rendered with text and action', () => {
  const handleClick = jest.fn();
  render(<QuickLink.$ {...props} onClick={handleClick} />);

  expect(screen.getByText('Indigo')).toBeInTheDocument();

  const link = screen.getByRole('link');
  fireEvent.click(link);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
