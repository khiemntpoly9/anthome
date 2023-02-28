import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../admin/Admin';
import AdminLayout from '../layout/Admin-Layout';
import UserLayout from '../layout/User-Layout';
import Home from '../page/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Page */}
				<Route path='/' element={<UserLayout />}>
					<Route index element={<Home />} />
					<Route path='/home' element={<Home />} />
				</Route>
				{/* Admin */}
				<Route path='/admin' element={<AdminLayout />}>
					<Route index element={<Admin />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
