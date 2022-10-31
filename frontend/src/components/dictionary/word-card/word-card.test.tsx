import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, } from '@testing-library/react';

import { WordCard } from './word-card.component';

const props = {
  word: {
    word: 'Relationship',
    phonetics: ['/ɹɪˈleɪʃ(ə)nʃɪp/', '/ɹɪˈleɪʃənˌʃɪp/'],
    meanings: [{
      partOfSpeach: 'noun',
      definitions: [
        'Connection or association; the condition of being related.',
        'Kinship; being related by blood or marriage.'
      ]
    }]
  },
  isFavorite: true,
};

test('WordCard rendered with all data and action', () => {
  const handleFavorite = jest.fn();
  render(<WordCard.$ {...props} onClick={handleFavorite} />);

  expect(screen.getByText('Relationship')).toBeInTheDocument();
  expect(screen.getByText('/ɹɪˈleɪʃ(ə)nʃɪp/ or /ɹɪˈleɪʃənˌʃɪp/')).toBeInTheDocument();
  expect(screen.getByText('noun')).toBeInTheDocument();
  expect(screen.getByText('Connection or association; the condition of being related.')).toBeInTheDocument();
  expect(screen.getByText('Kinship; being related by blood or marriage.')).toBeInTheDocument();

  const favoriteButton = screen.getByRole('button');
  fireEvent.click(favoriteButton);
  expect(handleFavorite).toHaveBeenCalledTimes(1);
});
