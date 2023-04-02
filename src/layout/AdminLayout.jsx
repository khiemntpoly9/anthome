import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

// eslint-disable-next-line react/prop-types
const DefaultLayout = () => {
	return (
		<div className='container-fluid p-0'>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DefaultLayout;
