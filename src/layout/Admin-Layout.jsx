import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
	return (
		<div className='container-fluid p-0'>
			<Outlet />
		</div>
	);
};

export default AdminLayout;
