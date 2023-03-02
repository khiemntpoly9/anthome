import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const UserLayout = () => {
	return (
		<div className='container-fluid p-0'>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default UserLayout;
