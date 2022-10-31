import '@testing-library/jest-dom';
import { extractWordData } from './extractWordData';

const response = {
  'word': 'indigo',
  'phonetic': '/ˈɪn.dɪˌɡəʊ/',
  'phonetics': [
    {
      'text': '/ˈɪn.dɪˌɡəʊ/',
      'audio': ''
    },
    {
      'text': '/ˈɪndɪˌɡoʊ/',
      'audio': ''
    }
  ],
  'meanings': [
    {
      'partOfSpeech': 'noun',
      'definitions': [
        {
          'definition': 'A purplish-blue colour',
          'synonyms': [],
          'antonyms': []
        },
        {
          'definition': 'An indigo-colored dye obtained from certain plants (the indigo plant or woad), or a similar synthetic dye.',
          'synonyms': [],
          'antonyms': []
        },
        {
          'definition': 'An indigo plant, such as from species in genera Indigofera, Amorpha (false indigo), Baptisia (wild indigo), and Psorothamnus and Dalea (indigo bush).',
          'synonyms': [],
          'antonyms': []
        }
      ],
      'synonyms': [],
      'antonyms': []
    },
    {
      'partOfSpeech': 'adjective',
      'definitions': [
        {
          'definition': 'Having a deep purplish-blue colour',
          'synonyms': [],
          'antonyms': []
        }
      ],
      'synonyms': [],
      'antonyms': []
    }
  ],
  'license': {
    'name': 'CC BY-SA 3.0',
    'url': 'https://creativecommons.org/licenses/by-sa/3.0'
  },
  'sourceUrls': [
    'https://en.wiktionary.org/wiki/indigo'
  ]
};


test('Word data extracted from JSON', () => {
  expect(extractWordData(response)).toEqual({
    'word': 'indigo',
    'phonetics': [
      '/ˈɪn.dɪˌɡəʊ/',
      '/ˈɪndɪˌɡoʊ/'
    ],
    'meanings': [
      {
        'partOfSpeach': 'noun',
        'definitions': [
          'A purplish-blue colour',
          'An indigo-colored dye obtained from certain plants (the indigo plant or woad), or a similar synthetic dye.',
          'An indigo plant, such as from species in genera Indigofera, Amorpha (false indigo), Baptisia (wild indigo), and Psorothamnus and Dalea (indigo bush).'
        ]
      },
      {
        'partOfSpeach': 'adjective',
        'definitions': [
          'Having a deep purplish-blue colour'
        ]
      }
    ]
  });
});

