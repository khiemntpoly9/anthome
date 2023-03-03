import React from 'react';
import Header from './header/Header';
// import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
	return (
		<div className='container-fluid p-0'>
			<Header />
			<div>{children}</div>
		</div>
	);
};

export default DefaultLayout;
