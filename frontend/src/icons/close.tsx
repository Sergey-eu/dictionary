import React, { FC } from 'react';
import { SvgIcon } from '../components/common/svg-icon';

export const CloseIcon: FC<SvgIcon.Props> = (props) => {
	return (
		<SvgIcon.$ viewBox="0 0 16 16" width={16} height={16} {...props}>
			<path d="M13 4.00714L11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714Z" fill="currentColor" />
		</SvgIcon.$>
	);
};
