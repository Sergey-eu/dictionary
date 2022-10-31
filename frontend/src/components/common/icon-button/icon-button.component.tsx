import React, { FC } from 'react';
import cx from 'classnames';
import { SvgIcon } from '../svg-icon';
import { WithDataTest } from '../../../types';

import styles from './icon-button.module.scss';

export namespace IconButton {
  export type Props = Readonly<{
    Icon: React.ComponentType<SvgIcon.Props>;
    size: Sizes;
    onClick: () => void;
  }> &
    WithDataTest;

  export enum Sizes {
    Small = 'Small',
    Medium = 'Medium',
  }

  const buttonStyleMapper = {
    [Sizes.Small]: styles.iconButton_small,
    [Sizes.Medium]: styles.iconButton_medium,
  };

  export const $: FC<Props> = (props) => {
    const { Icon, size = Sizes.Medium, onClick, dataTest } = props;

    return (
      <button
        className={cx(styles.iconButton, buttonStyleMapper[size])}
        onClick={() => onClick()}
        data-test={dataTest}>
        <Icon size={SvgIcon.Sizes.Auto} />
      </button>
    );
  };
}

