import React, { FC } from 'react';
import { SvgIcon } from '../components/common/svg-icon';

export const HistoryListIcon: FC<SvgIcon.Props> = (props) => {
	return (
		<SvgIcon.$ viewBox="0 0 64 64" width={64} height={64} {...props}>
			<path d="M54.8 51.9a12 12 0 1 0-2.8 2.8l7.6 7.6a2 2 0 1 0 2.8-2.8zM37 45a8 8 0 1 1 8 8 8 8 0 0 1-8-8z" fill="currentColor"></path>
			<path d="M29 45a16 16 0 0 1 16-16V1h-8v6a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4V1h-8v6a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4V1h-8v6a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4V1H1v52h30.1a15.9 15.9 0 0 1-2.1-8z" fill="currentColor"></path>
		</SvgIcon.$>
	);
};
