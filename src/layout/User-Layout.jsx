import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const UserLayout = () => {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default UserLayout;
