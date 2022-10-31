import React, { FC } from 'react';
import cx from 'classnames';
import { Heading } from '../heading';
import { IconButton } from '../icon-button';
import { CloseIcon } from '../../../icons';
import { WithOptionalDataTest } from '../../../types';

import styles from './sidebar.module.scss';

export namespace Sidebar {
  export type Props = Readonly<{
    title: string;
    theme: Themes;
    id: string;
    float?: Float | null;
    callBack?: (id: string) => void;
    children?: React.ReactNode;
  }> &
    WithOptionalDataTest;

  export enum Themes {
    Dark = 'Dark',
    Light = 'Light',
  }

  export enum Float {
    Static = 'Static',
    Hidden = 'Hidden',
    Visible = 'Visible',
  }

  const themeStyleMapper = {
    [Themes.Dark]: styles.sidebar_dark,
    [Themes.Light]: styles.sidebar_light,
  };

  const floatStyleMapper = {
    [Float.Static]: '',
    [Float.Hidden]: styles.sidebar_hidden,
    [Float.Visible]: styles.sidebar_visible,
  };

  export const $: FC<Props> = (props) => {
    const { title, theme, children, float, callBack, id, dataTest } = props;

    return (
      <aside className={cx(styles.sidebar, themeStyleMapper[theme], float && styles.sidebar_mobile, float && floatStyleMapper[float])} data-test={dataTest}>
        <div className={styles.sidebar__title}>
          <Heading.$ level={Heading.Levels.h3}>{title}</Heading.$>
          {float &&
            <IconButton.$
              size={IconButton.Sizes.Medium}
              Icon={CloseIcon}
              onClick={() => callBack?.(id)}
              dataTest={`${id}-sidebar-close`} />}
        </div>
        <div className={styles.sidebar__container}>
          {children}
        </div>
      </aside>
    );
  };
}

