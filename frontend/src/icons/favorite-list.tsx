import React, { FC } from 'react';
import { SvgIcon } from '../components/common/svg-icon';

export const FavoriteListIcon: FC<SvgIcon.Props> = (props) => {
	return (
		<SvgIcon.$ viewBox="0 0 64 64" width={64} height={64} {...props}>
			<path fill="currentColor" d="M46 54.9L36.1 62l3.8-11.5L30 44h12.2L46 32l3.8 12H62l-9.9 6.5L55.9 62 46 54.9z"></path>
			<path d="M35.2 52.2l-7.4-4.8A4 4 0 0 1 30 40h9.3l2.9-9.2A4 4 0 0 1 46 28V2h-8v6a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4V2h-8v6a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4V2h-8v6a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4V2H2v56h31.2z" fill="currentColor"></path>
		</SvgIcon.$>
	);
};
