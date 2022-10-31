import React, { FC } from 'react';
import cx from 'classnames';
import { WithOptionalDataTest } from '../../../types';

import styles from './heading.module.scss';

export namespace Heading {
  export type Props = Readonly<{
    level: Levels
    children?: React.ReactNode
    className?: string
  }> &
    WithOptionalDataTest;

  export enum Levels {
    h3 = 'h3',
    h4 = 'h4'
  }

  const headingStyleMapper = {
    [Levels.h3]: styles.heading_3,
    [Levels.h4]: styles.heading_4
  };

  export const $: FC<Props> = (props) => {
    const { level, children, className, dataTest } = props;
    const classNames = cx(styles.heading, headingStyleMapper[level], className);

    return React.createElement(
      level,
      { className: classNames, 'data-test': dataTest },
      children
    );
  };
}
