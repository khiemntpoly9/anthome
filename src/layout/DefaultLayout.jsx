import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

// eslint-disable-next-line react/prop-types
const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<article className='container-fluid p-0 m-0'>
				<Outlet />
			</article>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
