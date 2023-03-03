import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<div>
				{/* <Outlet /> */}
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
