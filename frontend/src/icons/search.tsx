import React, { FC } from 'react';
import { SvgIcon } from '../components/common/svg-icon';

export const SearchIcon: FC<SvgIcon.Props> = (props) => {
	return (
		<SvgIcon.$ viewBox="0 0 24 24" width={24} height={24} {...props}>
			<path d="M15.5 14L14.5 13L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L13.3007 14.7689L14 15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currrentColor" />
		</SvgIcon.$>
	);
};
