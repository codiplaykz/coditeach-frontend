import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MdKeyboardArrowLeft} from 'react-icons/md';

const BackButton = ({ path, title }) => {
	return (
		<Link className='flex items-center text-primary font-bold text-sm' to={path}>
			<MdKeyboardArrowLeft className='text-4xl' />
			<span>{title}</span>
		</Link>
	);
};

BackButton.propTypes = {
	path: PropTypes.string,
	title: PropTypes.string
};

export default BackButton;
