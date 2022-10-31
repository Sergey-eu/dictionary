import React, { FC, SyntheticEvent } from 'react';
import { WithDataTest } from '../../../types';

import styles from './quick-link.module.scss';

export namespace QuickLink {
  export type Props = Readonly<{
    text: string;
    onClick: (word: string) => void;
  }> &
    WithDataTest;

  export const $: FC<Props> = (props) => {
    const { text, onClick, dataTest } = props;
    const handleClick = (e: SyntheticEvent) => {
      e.preventDefault();
      onClick(text);
    };

    return (
      <a
        href={`#${text}`}
        className={styles.quickLink}
        onClick={e => handleClick(e)}
        data-test={dataTest}>
        {text}
      </a>
    );
  };
}

