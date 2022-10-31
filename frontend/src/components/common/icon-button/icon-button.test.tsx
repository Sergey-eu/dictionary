import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { IconButton } from './icon-button.component';
import { CloseIcon } from '../../../icons';

const props = {
  Icon: CloseIcon,
  size: IconButton.Sizes.Small,
  dataTest: 'button'
};

test('IconButton rendered and clickable', () => {
  const handleClick = jest.fn();
  render(<IconButton.$ {...props} onClick={handleClick} />);

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
