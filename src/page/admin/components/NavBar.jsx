import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../../layout/assets/img/logo.png';
import logo_small from '../../../layout/assets/img/logo-small.png';
import closes from '../../../layout/assets/img/icons/closes.svg';
import search from '../../../layout/assets/img/icons/search.svg';
//
import notification from '../../../layout/assets/img/icons/notification-bing.svg';
//
import avatar from '../../../layout/assets/img/profiles/avt.png';
import logout from '../../../layout/assets/img/icons/log-out.svg';

const NavBar = () => {
	return (
		<div class='header'>
			<div class='header-left active'>
				<Link to='/admin' class='logo'>
					<img src={logo} alt='' />
				</Link>
				<Link to='/admin' class='logo-small'>
					<img src={logo_small} alt='' />
				</Link>
				<a id='toggle_btn' href='javascript:void(0);'>
					{' '}
				</a>
			</div>

			<a id='mobile_btn' class='mobile_btn' href='#sidebar'>
				<span class='bar-icon'>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</a>

			<ul class='nav user-menu'>
				<li class='nav-item'>
					<div class='top-nav-search'>
						<a href='javascript:void(0);' class='responsive-search'>
							<i class='fa fa-search'></i>
						</a>
						<form action='#'>
							<div class='searchinputs'>
								<input type='text' placeholder='Tìm kiếm ...' />
								<div class='search-addon'>
									<span>
										<img src={closes} alt='img' />
									</span>
								</div>
							</div>
							<a class='btn' id='searchdiv'>
								<img src={search} alt='img' />
							</a>
						</form>
					</div>
				</li>
				<li class='nav-item dropdown'>
					<a href='javascript:void(0);' class='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
						<img src={notification} alt='img' />
						<span class='badge rounded-pill'>0</span>
					</a>
					<div class='dropdown-menu notifications'>
						<div class='topnav-dropdown-header'>
							<span class='notification-title'>Thông báo</span>
							<a href='javascript:void(0)' class='clear-noti'>
								{' '}
								Xoá tất cả{' '}
							</a>
						</div>
						<div class='noti-content'>
							<ul class='notification-list'>
								{/* <li class='notification-message'>
									<a href='activities.html'>
										<div class='media d-flex'>
											<span class='avatar flex-shrink-0'>
												<img alt='' src={avatar1} />
											</span>
											<div class='media-body flex-grow-1'>
												<p class='noti-details'>
													<span class='noti-title'>John Doe</span> added new task
													<span class='noti-title'>Patient appointment booking</span>
												</p>
												<p class='noti-time'>
													<span class='notification-time'>4 mins ago</span>
												</p>
											</div>
										</div>
									</a>
								</li> */}
							</ul>
						</div>
						<div class='topnav-dropdown-footer'>
							<a href='activities.html'>Xem tất cả thông báo</a>
						</div>
					</div>
				</li>
				{/* User */}
				<li class='nav-item dropdown has-arrow main-drop'>
					<a href='javascript:void(0);' class='dropdown-toggle nav-link userset' data-bs-toggle='dropdown'>
						<span class='user-img'>
							<div className='mb-4'>
								<img className='' src={avatar} alt='' />
							</div>
						</span>
					</a>
					<div class='dropdown-menu menu-drop-user'>
						<div class='profilename'>
							<div class='profileset d-flex align-items-start'>
								<span class='user-img'>
									<img src={avatar} alt='' />
								</span>
								<div class='profilesets'>
									<h6>Trung Khiêm</h6>
									<h5>Admin</h5>
								</div>
							</div>
							<hr class='m-0' />
							<a class='dropdown-item' href='profile.html'>
								<i class='me-2' data-feather='user'></i> Trang cá nhân
							</a>
							<a class='dropdown-item' href='generalsettings.html'>
								<i class='me-2' data-feather='settings'></i> Cài đặt
							</a>
							<hr class='m-0' />
							<a class='dropdown-item logout pb-0' href='signin.html'>
								<img src={logout} class='me-2' alt='img' />
								Đăng xuất
							</a>
						</div>
					</div>
				</li>
				{/* End user */}
			</ul>

			<div class='dropdown mobile-user-menu'>
				<a
					href='javascript:void(0);'
					class='nav-link dropdown-toggle'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i class='fa fa-ellipsis-v'></i>
				</a>
				<div class='dropdown-menu dropdown-menu-right'>
					<a class='dropdown-item' href='profile.html'>
						Trang cá nhân
					</a>
					<a class='dropdown-item' href='generalsettings.html'>
						Cài đặt
					</a>
					<a class='dropdown-item' href='signin.html'>
						Đăng xuất
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
