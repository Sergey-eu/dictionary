import React, { FC, KeyboardEvent } from 'react';
import cx from 'classnames';
import { IconButton } from '../icon-button';
import { SvgIcon } from '../svg-icon';
import { CloseIcon, SearchIcon, InfoIcon } from '../../../icons';
import { WithDataTest } from '../../../types';

import styles from './search.module.scss';

export namespace Search {
  export type Props = Readonly<{
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSearch: (word: string) => void;
    error: boolean;
  }> &
    WithDataTest;

  export const $: FC<Props> = (props) => {
    const { placeholder, value, error, onSearch, onChange, dataTest } = props;
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch(value);
      }
    };
    return (
      <div className={styles.search}>
        <div className={cx(styles.search__icon, styles.search__icon_search)}>
          <IconButton.$
            size={IconButton.Sizes.Medium}
            Icon={SearchIcon}
            onClick={() => onSearch(value)}
            dataTest='search-button' />
        </div>
        <input
          type='text'
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.search__input}
          onKeyPress={handleKeyPress}
          data-test={dataTest} />
        {value &&
          <div className={cx(styles.search__icon, styles.search__icon_remove)}>
            <IconButton.$
              size={IconButton.Sizes.Small}
              Icon={CloseIcon}
              onClick={() => onChange('')}
              dataTest='clear-button' />
          </div>}
        {error &&
          <div className={styles.search__error}>
            <InfoIcon size={SvgIcon.Sizes.Small} /> Unknown word
          </div>}
      </div>
    );
  };
}
