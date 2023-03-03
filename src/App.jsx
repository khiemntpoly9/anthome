import { React, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/Router';
import { DefaultLayout } from './layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map((route, index) => {
					// const Layout = route.layout === null ? Fragment : DefaultLayout;
					const Page = route.component;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					} else if (route.layout === null) {
						Layout = Fragment;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}
export default App;
