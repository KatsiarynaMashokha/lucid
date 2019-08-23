import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { FC, omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-ResizeIcon');

interface IResizeIconProps extends IIconProps {}

const ResizeIcon: FC<IResizeIconProps> = ({
	className,
	...passThroughs
}): React.ReactElement => {

	return (
		<Icon
			{...omitProps(passThroughs, undefined, _.keys(ResizeIcon.propTypes), false)}
			{..._.pick(passThroughs, _.keys(Icon.propTypes))}
			className={cx('&', className)}
		>
			<path d='M13.5 15.5l2-2m-6 2l6-6' />
		</Icon>
	);
};

ResizeIcon.displayName = 'ResizeIcon',
ResizeIcon.peek = {
	description: `
		An asterisk icon.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};
ResizeIcon.propTypes = {
	...Icon.propTypes,
};

export default ResizeIcon;
