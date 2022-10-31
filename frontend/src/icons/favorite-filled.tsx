import React, { FC } from 'react';
import { SvgIcon } from '../components/common/svg-icon';

export const FavoriteFilledIcon: FC<SvgIcon.Props> = (props) => {
	return (
		<SvgIcon.$ viewBox="0 0 24 24" width={24} height={24} {...props}>
			<path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="currentColor" />
		</SvgIcon.$>
	);
};
