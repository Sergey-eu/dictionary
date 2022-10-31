export type Word = {
  word: string;
  phonetics: string[];
  meanings: Meaning[];
};

export type Meaning = {
  partOfSpeach: string;
  definitions: string[];
}
