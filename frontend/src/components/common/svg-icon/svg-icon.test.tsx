import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { SvgIcon } from './svg-icon.component';

const props = {
  size: SvgIcon.Sizes.Medium,
  viewBox: '0 0 16 16'
};

const path = <path d="M13 4.00714L11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714Z" />;

test('SvgIcon rendered with path and viewbox', () => {
  const { container } = render(<SvgIcon.$ {...props} >{path}</SvgIcon.$>);
  expect(container.querySelector('path')).toBeInTheDocument();
});
