import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import DefaultLayout from './layout/DefaultLayout';
import AdmintLayout from './layout/AdminLayout';

// Page
import Pagenotfound from './page/Pagenotfound';
import Home from './page/home/Home';
import Admin from './admin/Admin';

const App = () => {
	return (
		<Routes>
			{/* Page */}
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path='/home' element={<Home />} />
			</Route>
			<Route path='/admin' element={<AdmintLayout />}>
				<Route index element={<Admin />} />
			</Route>
			<Route path='*' element={<Pagenotfound />} />
		</Routes>
	);
};

export default App;
