import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import { useThrottle } from '@corets/use-throttle';
import { observer } from 'mobx-react-lite';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '../../components/common/sidebar';
import { Search } from '../../components/common/search';
import { WordCard } from '../../components/dictionary/word-card';
import { QuickLink } from '../../components/dictionary/quick-link';
import { IconButton } from '../../components/common/icon-button';
import { FavoriteListIcon, HistoryListIcon } from '../../icons';
import { RequestStatus } from '../../types';
import store from '../../store';

import styles from './home.module.scss';

export const HomePage: FC = observer(() => {
  const { favorites, history, updateFavorites, getWord, status, updateStatus, getFavorites } = store;
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeBar, setActiveBar] = useState<string | null>(null);

  const handleSearchChange = (value: string) => {
    updateStatus(RequestStatus.Pending);
    setSearchValue(value);
  };

  const handleFavorite = useThrottle((word: string) => {
    updateFavorites(word);
  }, 500);

  const handleSidebarOpen = (id: string) => {
    setActiveBar(activeBar === id ? null : id);
  };

  const getFloatState = (id: string) => {
    if (!isMobile) return null;
    return activeBar === id
      ? Sidebar.Float.Visible
      : Sidebar.Float.Hidden;
  };

  useEffect(() => {
    if (status === RequestStatus.Success) {
      setSearchValue('');
    }
  }, [status]);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className={cx(styles.home, isMobile && styles.home_mobile)}>
      <Sidebar.$
        id='favorites'
        theme={Sidebar.Themes.Dark}
        float={getFloatState('favorites')}
        title='Favourites'
        callBack={handleSidebarOpen}>
        {favorites.length
          ? favorites.map(word =>
            <QuickLink.$
              key={word}
              text={word}
              onClick={(word) => getWord(word)}
              dataTest={`favorite-quick-link-${word}`}
            />)
          : <p>No favorites added</p>}
      </Sidebar.$>
      <div className={styles.home__content}>
        <div className={styles.home__header}>
          <Search.$
            placeholder='Search'
            value={searchValue}
            onSearch={(word) => getWord(word)}
            onChange={handleSearchChange}
            error={Boolean(searchValue) && status === RequestStatus.Error}
            dataTest='word-search'
          />
          {isMobile && <div className={styles.home__actions}>
            <IconButton.$
              Icon={FavoriteListIcon}
              size={IconButton.Sizes.Medium}
              onClick={() => handleSidebarOpen('favorites')}
              dataTest='open-favorite-sidebar'
            />
            <IconButton.$
              Icon={HistoryListIcon}
              size={IconButton.Sizes.Medium}
              onClick={() => handleSidebarOpen('history')}
              dataTest='open-favorite-sidebar'
            />
          </div>}
        </div>
        <div className={styles.home__list}>
          {status === RequestStatus.Loading && <p>Loading...</p>}
          {history.map(word =>
            <WordCard.$
              key={word.word}
              word={word}
              isFavorite={favorites.includes(word.word)}
              onClick={handleFavorite}
              dataTest={`word-card-${word.word}`}
            />)}
        </div>
      </div>
      <Sidebar.$
        id='history'
        theme={Sidebar.Themes.Light}
        float={getFloatState('history')}
        title='Search History'
        callBack={handleSidebarOpen}>
        {history.length
          ? history.map(word =>
            <QuickLink.$
              key={word.word}
              text={word.word}
              onClick={(word) => getWord(word)}
              dataTest={`history-quick-link-${word.word}`}
            />)
          : <p>No searching history</p>}
      </Sidebar.$>
    </div >
  );
});
