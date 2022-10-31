import { Word, JsonDataItem } from '../types';

/* The purpose of this function is to grab the necessary data about the word from JSON */
export const extractWordData = (data: JsonDataItem) => {
  const word: Word = {
    word: '',
    phonetics: [],
    meanings: []
  };
  // set word
  word.word = data.word;

  // set phonetics
  word.phonetics = data.phonetics.map( (phonetic: JsonDataItem) => phonetic.text);

  // set meanings
  word.meanings = data.meanings.map( (meaning: JsonDataItem) => {
    return {
      partOfSpeach: meaning.partOfSpeech,
      definitions: meaning.definitions.map((item: JsonDataItem) => item.definition)
    };
  });

  return word;
};
