import React from 'react';
import './Footer.scss';
import logo from '../../images/logo.webp';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container d-flex px-0 pt-4'>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer mb-2'>Liên hệ với Ant Home</h4>
					<div className='footer-body'>
						<div className='mb-2'>
							<strong>Địa chỉ:</strong> 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City
						</div>
						<div className='mb-2'>
							<strong>Điện thoại:</strong> 1900 6750
						</div>
						<div className='mb-2'>
							<strong>Email:</strong> suppor@anthome.vn
						</div>
						<div>
							<img className='img-fluid' src={logo} alt='' />
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer'>Về chúng tôi</h4>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer'>Hỗ trợ khách hàng</h4>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer'>Kết nối với chúng tôi</h4>
				</div>
			</div>
			<div className='copyright'>
				<div className='text-center'>
					<span>© Bản quyền thuộc về Kiến Vàng | Cung cấp bởi Sapo</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
