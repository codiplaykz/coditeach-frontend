import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
	isAllowed,
	redirectPath = '/login',
	children
}) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}
	return children ? children : <Outlet />;
};

export default ProtectedRoute;


ProtectedRoute.propTypes = {
	isAllowed: PropTypes.bool,
	redirectPath: PropTypes.string,
	children: PropTypes.func
};