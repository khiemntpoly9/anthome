import React from 'react';
import Meta from './Meta';
import Header from './header/Header';
import Footer from './footer/Footer';

const Pagenotfound = () => {
	return (
		<div className='container-fuild'>
			<Meta title='404! - Không tìm thấy' />
			<Header></Header>
			<div className='text-center'>Không tìm thấy trang!</div>
			<Footer></Footer>
		</div>
	);
};

export default Pagenotfound;
