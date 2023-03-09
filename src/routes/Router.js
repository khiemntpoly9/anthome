// Layout
import AdminLayout from '../layout/AdminLayout';

// Page
import Home from '../page/home/Home';
import Admin from '../admin/Admin';
import Pagenotfound from '../page/Pagenotfound';

// Public Router
const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home },
	{ path: '/admin', component: Admin, layout: null },
	{ path: '/admin1', component: Admin, layout: AdminLayout },
	{ path: '*', component: Pagenotfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
