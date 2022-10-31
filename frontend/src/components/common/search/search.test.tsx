import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, } from '@testing-library/react';

import { Search } from './search.component';

const props = {
  placeholder: 'Search',
  value: 'Indigo',
  error: true,
  dataTest: 'search'
};

test('Search rendered with value, state and change actions', () => {
  const handleChange = jest.fn();
  const handleSearch = jest.fn();
  const { container } = render(<Search.$ {...props} onChange={handleChange} onSearch={handleSearch} />);

  expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Indigo')).toBeInTheDocument();
  expect(container.querySelector('.search__error')).toBeInTheDocument();

  const clearButton = container.querySelector('.search__icon_remove button') as HTMLDivElement;
  const searchButton = container.querySelector('.search__icon_search button') as HTMLDivElement;
  const input = container.querySelector('.search__input') as HTMLInputElement;

  fireEvent.click(clearButton);
  expect(handleChange).toHaveBeenCalledTimes(1);

  fireEvent.click(searchButton);
  expect(handleSearch).toHaveBeenCalledTimes(1);

  fireEvent.change(input, { target: { value: 'Car' } });
  expect(handleChange).toHaveBeenCalledTimes(2);

  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
  expect(handleSearch).toHaveBeenCalledTimes(2);
});
