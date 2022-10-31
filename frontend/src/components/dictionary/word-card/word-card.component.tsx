import React, { FC } from 'react';
import { Heading } from '../../common/heading';
import { IconButton } from '../../common/icon-button';
import { FavoriteEmptyIcon, FavoriteFilledIcon } from '../../../icons';
import { Word, WithOptionalDataTest } from '../../../types';

import styles from './word-card.module.scss';

export namespace WordCard {
  export type Props = Readonly<{
    word: Word;
    isFavorite: boolean;
    onClick: (word: string) => void;
  }> &
    WithOptionalDataTest;

  export const $: FC<Props> = (props) => {
    const { word, isFavorite, onClick, dataTest } = props;
    const phonetics = word.phonetics.filter(item => item).join(' or ');

    return (
      <div className={styles.wordCard} data-test={dataTest}>
        <div className={styles.wordCard__header}>
          <div className={styles.wordCard__title}>
            <Heading.$
              level={Heading.Levels.h4}
              dataTest='card-title'>
              {word.word}
            </Heading.$>
            <span className={styles.wordCard__phonetics}>
              {phonetics}
            </span>
          </div>
          <div className={styles.wordCard__action}>
            <IconButton.$
              size={IconButton.Sizes.Medium}
              Icon={isFavorite ? FavoriteFilledIcon : FavoriteEmptyIcon}
              onClick={() => onClick(word.word)}
              dataTest='favorite-button'
            />
          </div>
        </div>
        {word.meanings.map(meaning => <div key={meaning.partOfSpeach} className={styles.wordCard__meaning}>
          <div className={styles.wordCard__meaningTitle}>{meaning.partOfSpeach}</div>
          <ol className={styles.wordCard__meaningDefinitions}>
            {meaning.definitions.map(definition =>
              <li key={definition} className={styles.wordCard__meaningDefinition}>{definition}</li>
            )}
          </ol>
        </div>)}
      </div>
    );
  };
}

