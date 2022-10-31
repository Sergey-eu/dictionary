import React, { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('Redirect to HomePage works', () => {
  render(<App />);
  expect(location.pathname).toBe('/');
});
