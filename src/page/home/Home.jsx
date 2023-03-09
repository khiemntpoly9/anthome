import React from 'react';
import Meta from '../../components/Meta';
import banner from '../../images/slider_1.jpg';
import './Home.scss';

const Home = () => {
	return (
		<div className='container-flui mx-0'>
			<Meta title='Ant Home' />
			<div className='banner-home'>
				<img className='img-fluid' src={banner} alt='' />
			</div>
		</div>
	);
};

export default Home;
