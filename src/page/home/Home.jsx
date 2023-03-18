import React from 'react';
// Import Swiper React components
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

import Meta from '../../components/Meta';
// Baner
import banner from '../../images/slider_1.jpg';
// Icon item category
import icon1cate from '../../images/category/1-ban-1587981900-1.webp';
import icon2cate from '../../images/category/2-ghe-1587981944-1.webp';
import icon3cate from '../../images/category/3-ke-1587981966-1.webp';
import icon4cate from '../../images/category/4-tu-1587981995-1.webp';
import icon5cate from '../../images/category/5-sofa-1587982024-1.webp';
import icon6cate from '../../images/category/6-giuong-1587982051-1.webp';
import icon7cate from '../../images/category/7-kitchen-1587716252-1.webp';
import icon8cate from '../../images/category/8-den-1587982122-1.webp';
import icon9cate from '../../images/category/9-lo-trang-tri-1587982150-1.webp';
import icon10cate from '../../images/category/10-guong-1587982173-1.webp';
import icon11cate from '../../images/category/11-thungrac-1587982194-1.webp';
import icon12cate from '../../images/category/12-bosanpham-1587982214-1.webp';
import './Home.scss';

const Home = () => {
	// Khai báo breakpoints cho Swiper
	const breakpoints = {
		0: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		567: {
			spaceBetween: 10,
			slidesPerView: 3,
		},
		768: {
			spaceBetween: 30,
			slidesPerView: 4,
		},
	};
	// Autoplay
	SwiperCore.use([Autoplay]);
	return (
		<div className='container-flui mx-0'>
			<Meta title='Ant Home' />
			<div className='banner-home'>
				<img className='img-fluid' src={banner} alt='' />
			</div>
			{/* Danh mục sản phẩm */}
			<div className='container-lg category-container mt-4'>
				<div className='text-center'>
					<div>
						<h4 className='text-uppercase' style={{ fontWeight: 500 }}>
							Danh mục sản phẩm
						</h4>
					</div>
					<div>
						<span>
							Ant Home là giải pháp thương mại điện tử hiện đại và chuyên biệt trong lĩnh vực bán lẻ nội thất,
							đồ trang trí và điện gia dụng trong gia đình, định vị trở thành một giải pháp tiên phong trong
							định hình phong cách sống hiện đại cho các gia chủ tại Việt Nam và khu vực Đông Nam Á qua sự kết
							hợp của những thương hiệu nội thất hàng đầu với đa dạng phong cách và trải nghiệm mua sắm xuyên
							suốt, trực quan thông qua việc tích hợp các ứng dụng 3D visualization, Home Styler, AR và các
							giải pháp tài chính.
						</span>
					</div>
				</div>
				{/* List danh mục */}
				<div className='category-items mt-3'>
					<Swiper
						modules={[Scrollbar, Autoplay]}
						scrollbar={{ draggable: true, dragSize: 'auto', hide: false }}
						autoplay={{ delay: 3000 }}
						breakpoints={breakpoints}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon1cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon2cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon3cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon4cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon5cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon6cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon7cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon8cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon9cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon10cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon11cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='item-cate'>
								<div className=''>
									<img className='img-fluid' src={icon12cate} alt='' />
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Home;
