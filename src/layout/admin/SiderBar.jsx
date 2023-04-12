/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';

import dashboard from '../assets/img/icons/dashboard.svg';
import product from '../assets/img/icons/product.svg';
import sales from '../assets/img/icons/sales1.svg';
import purchase1 from '../assets/img/icons/purchase1.svg';
import expense1 from '../assets/img/icons/expense1.svg';
import quotation1 from '../assets/img/icons/quotation1.svg';
import transfer1 from '../assets/img/icons/transfer1.svg';
import return1 from '../assets/img/icons/return1.svg';
import users1 from '../assets/img/icons/users1.svg';
import places from '../assets/img/icons/places.svg';
import time from '../assets/img/icons/time.svg';
import settings from '../assets/img/icons/settings.svg';

const SiderBar = () => {
	return (
		<div className='sidebar' id='sidebar'>
			<div className='sidebar-inner slimscroll w-100'>
				<div id='sidebar-menu' className='sidebar-menu'>
					<ul className='p-0'>
						<li className='active'>
							<Link to='/admin'>
								<img src={dashboard} alt='img' />
								<span>Quản lý</span>
							</Link>
						</li>
						<li className='submenu'>
							<a
								data-bs-toggle='collapse'
								href='#collapseProduct'
								role='button'
								aria-expanded='false'
								aria-controls='collapseExample'
							>
								<img src={product} alt='img' />
								<span>Sản phẩm</span>
								<span className='menu-arrow'></span>
							</a>
							<div className='collapse mt-2' id='collapseProduct'>
								<div className='card card-body'>
									<li>
										<Link to='/admin/listproduct'>Danh sách sản phẩm</Link>
									</li>
									<li>
										<Link to='/admin/add-product'>Thêm sản phẩm</Link>
									</li>
									<li>
										<a href='categorylist.html'>Danh sách danh mục</a>
									</li>
									<li>
										<a href='addcategory.html'>Thêm danh mục</a>
									</li>
									<li>
										<a href='subcategorylist.html'>Danh mục con</a>
									</li>
									<li>
										<a href='subaddcategory.html'>Thêm danh mục con</a>
									</li>
									<li>
										<a href='brandlist.html'>Danh sách hãng</a>
									</li>
									<li>
										<a href='addbrand.html'>Thêm hãng</a>
									</li>
								</div>
							</div>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={sales} alt='img' />
								<span>Sales</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='saleslist.html'>Sales List</a>
								</li>
								<li>
									<a href='pos.html'>POS</a>
								</li>
								<li>
									<a href='pos.html'>New Sales</a>
								</li>
								<li>
									<a href='salesreturnlists.html'>Sales Return List</a>
								</li>
								<li>
									<a href='createsalesreturns.html'>New Sales Return</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={purchase1} alt='img' />
								<span>Purchase</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='purchaselist.html'>Purchase List</a>
								</li>
								<li>
									<a href='addpurchase.html'>Add Purchase</a>
								</li>
								<li>
									<a href='importpurchase.html'>Import Purchase</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={expense1} alt='img' />
								<span>Expense</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='expenselist.html'>Expense List</a>
								</li>
								<li>
									<a href='createexpense.html'>Add Expense</a>
								</li>
								<li>
									<a href='expensecategory.html'>Expense Category</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={quotation1} alt='img' />
								<span>Quotation</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='quotationList.html'>Quotation List</a>
								</li>
								<li>
									<a href='addquotation.html'>Add Quotation</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={transfer1} alt='img' />
								<span>Transfer</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='transferlist.html'>Transfer List</a>
								</li>
								<li>
									<a href='addtransfer.html'>Add Transfer </a>
								</li>
								<li>
									<a href='importtransfer.html'>Import Transfer </a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={return1} alt='img' />
								<span>Return</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='salesreturnlist.html'>Sales Return List</a>
								</li>
								<li>
									<a href='createsalesreturn.html'>Add Sales Return </a>
								</li>
								<li>
									<a href='purchasereturnlist.html'>Purchase Return List</a>
								</li>
								<li>
									<a href='createpurchasereturn.html'>Add Purchase Return </a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={users1} alt='img' />
								<span>People</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='customerlist.html'>Customer List</a>
								</li>
								<li>
									<a href='addcustomer.html'>Add Customer </a>
								</li>
								<li>
									<a href='supplierlist.html'>Supplier List</a>
								</li>
								<li>
									<a href='addsupplier.html'>Add Supplier </a>
								</li>
								<li>
									<a href='userlist.html'>User List</a>
								</li>
								<li>
									<a href='adduser.html'>Add User</a>
								</li>
								<li>
									<a href='storelist.html'>Store List</a>
								</li>
								<li>
									<a href='addstore.html'>Add Store</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={places} alt='img' />
								<span>Places</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='newcountry.html'>New Country</a>
								</li>
								<li>
									<a href='countrieslist.html'>Countries list</a>
								</li>
								<li>
									<a href='newstate.html'>New State </a>
								</li>
								<li>
									<a href='statelist.html'>State list</a>
								</li>
							</ul>
						</li>
						<li>
							<a href='components.html'>
								<i data-feather='layers'></i>
								<span> Components</span>
							</a>
						</li>
						<li>
							<a href='blankpage.html'>
								<i data-feather='file'></i>
								<span> Blank Page</span>
							</a>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='alert-octagon'></i>
								<span> Error Pages </span> <span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='error-404.html'>404 Error </a>
								</li>
								<li>
									<a href='error-500.html'>500 Error </a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='box'></i> <span>Elements </span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='sweetalerts.html'>Sweet Alerts</a>
								</li>
								<li>
									<a href='tooltip.html'>Tooltip</a>
								</li>
								<li>
									<a href='popover.html'>Popover</a>
								</li>
								<li>
									<a href='ribbon.html'>Ribbon</a>
								</li>
								<li>
									<a href='clipboard.html'>Clipboard</a>
								</li>
								<li>
									<a href='drag-drop.html'>Drag & Drop</a>
								</li>
								<li>
									<a href='rangeslider.html'>Range Slider</a>
								</li>
								<li>
									<a href='rating.html'>Rating</a>
								</li>
								<li>
									<a href='toastr.html'>Toastr</a>
								</li>
								<li>
									<a href='text-editor.html'>Text Editor</a>
								</li>
								<li>
									<a href='counter.html'>Counter</a>
								</li>
								<li>
									<a href='scrollbar.html'>Scrollbar</a>
								</li>
								<li>
									<a href='spinner.html'>Spinner</a>
								</li>
								<li>
									<a href='notification.html'>Notification</a>
								</li>
								<li>
									<a href='lightbox.html'>Lightbox</a>
								</li>
								<li>
									<a href='stickynote.html'>Sticky Note</a>
								</li>
								<li>
									<a href='timeline.html'>Timeline</a>
								</li>
								<li>
									<a href='form-wizard.html'>Form Wizard</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='bar-chart-2'></i> <span> Charts </span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='chart-apex.html'>Apex Charts</a>
								</li>
								<li>
									<a href='chart-js.html'>Chart Js</a>
								</li>
								<li>
									<a href='chart-morris.html'>Morris Charts</a>
								</li>
								<li>
									<a href='chart-flot.html'>Flot Charts</a>
								</li>
								<li>
									<a href='chart-peity.html'>Peity Charts</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='award'></i>
								<span> Icons </span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='icon-fontawesome.html'>Fontawesome Icons</a>
								</li>
								<li>
									<a href='icon-feather.html'>Feather Icons</a>
								</li>
								<li>
									<a href='icon-ionic.html'>Ionic Icons</a>
								</li>
								<li>
									<a href='icon-material.html'>Material Icons</a>
								</li>
								<li>
									<a href='icon-pe7.html'>Pe7 Icons</a>
								</li>
								<li>
									<a href='icon-simpleline.html'>Simpleline Icons</a>
								</li>
								<li>
									<a href='icon-themify.html'>Themify Icons</a>
								</li>
								<li>
									<a href='icon-weather.html'>Weather Icons</a>
								</li>
								<li>
									<a href='icon-typicon.html'>Typicon Icons</a>
								</li>
								<li>
									<a href='icon-flag.html'>Flag Icons</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='columns'></i> <span> Forms </span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='form-basic-inputs.html'>Basic Inputs </a>
								</li>
								<li>
									<a href='form-input-groups.html'>Input Groups </a>
								</li>
								<li>
									<a href='form-horizontal.html'>Horizontal Form </a>
								</li>
								<li>
									<a href='form-vertical.html'> Vertical Form </a>
								</li>
								<li>
									<a href='form-mask.html'>Form Mask </a>
								</li>
								<li>
									<a href='form-validation.html'>Form Validation </a>
								</li>
								<li>
									<a href='form-select2.html'>Form Select2 </a>
								</li>
								<li>
									<a href='form-fileupload.html'>File Upload </a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<i data-feather='layout'></i> <span> Table </span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='tables-basic.html'>Basic Tables </a>
								</li>
								<li>
									<a href='data-tables.html'>Data Table </a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={product} alt='img' />
								<span>Application</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='chat.html'>Chat</a>
								</li>
								<li>
									<a href='calendar.html'>Calendar</a>
								</li>
								<li>
									<a href='email.html'>Email</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={time} alt='img' />
								<span>Report</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='purchaseorderreport.html'>Purchase order report</a>
								</li>
								<li>
									<a href='inventoryreport.html'>Inventory Report</a>
								</li>
								<li>
									<a href='salesreport.html'>Sales Report</a>
								</li>
								<li>
									<a href='invoicereport.html'>Invoice Report</a>
								</li>
								<li>
									<a href='purchasereport.html'>Purchase Report</a>
								</li>
								<li>
									<a href='supplierreport.html'>Supplier Report</a>
								</li>
								<li>
									<a href='customerreport.html'>Customer Report</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={users1} alt='img' />
								<span>Users</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='newuser.html'>New User </a>
								</li>
								<li>
									<a href='userlists.html'>Users List</a>
								</li>
							</ul>
						</li>
						<li className='submenu'>
							<a href='javascript:void(0);'>
								<img src={settings} alt='img' />
								<span>Settings</span>
								<span className='menu-arrow'></span>
							</a>
							<ul>
								<li>
									<a href='generalsettings.html'>General Settings</a>
								</li>
								<li>
									<a href='emailsettings.html'>Email Settings</a>
								</li>
								<li>
									<a href='paymentsettings.html'>Payment Settings</a>
								</li>
								<li>
									<a href='currencysettings.html'>Currency Settings</a>
								</li>
								<li>
									<a href='grouppermissions.html'>Group Permissions</a>
								</li>
								<li>
									<a href='taxrates.html'>Tax Rates</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SiderBar;
