import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import DefaultLayout from './layout/DefaultLayout';
import AdminLayout from './layout/AdminLayout';

// Page
import Pagenotfound from './page/Pagenotfound';
import Home from './page/home/Home';

// Admin
import Admin from './page/admin/Admin';
import ListProduct from './page/admin/ListProduct';

const App = () => {
	return (
		<Routes>
			{/* Page */}
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path='/home' element={<Home />} />
			</Route>
			<Route path='/admin' element={<AdminLayout />}>
				<Route index element={<Admin />} />
				<Route path='/listproduct' element={<ListProduct />} />
			</Route>
			<Route path='*' element={<Pagenotfound />} />
		</Routes>
	);
};

export default App;
