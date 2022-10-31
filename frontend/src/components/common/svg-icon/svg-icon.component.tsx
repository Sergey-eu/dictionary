import React, { FC, SVGProps } from 'react';
import classNames from 'classnames';
import { WithOptionalDataTest } from '../../../types';

import styles from './svg-icon.module.scss';

export namespace SvgIcon {
  export enum Sizes {
    Auto = 'Auto',
    Small = 'Small',
    Medium = 'Medium',
  }

  export type Props = Readonly<{
    size?: Sizes
    viewBox?: string
  }> &
    SVGProps<SVGSVGElement> &
    WithOptionalDataTest;

  const sizeMap = {
    [Sizes.Auto]: styles.svgIcon_auto,
    [Sizes.Small]: styles.svgIcon_small,
    [Sizes.Medium]: styles.svgIcon_medium,
  };

  export const $: FC<Props> = (props) => {
    const { size = Sizes.Medium, viewBox, dataTest, ...rest } = props;
    const classes = classNames(styles.svgIcon, sizeMap[size]);

    return (
      <svg
        viewBox={viewBox}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        data-test={dataTest}
        {...rest}
      >
        {props.children}
      </svg>
    );
  };
}
