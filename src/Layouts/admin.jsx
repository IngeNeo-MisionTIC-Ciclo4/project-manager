import Navbar from '../components/navbar';
import Footer from '../components/Footer'
import Bannerlogo from '../components/Bannerlogo'
import React from 'react'
import { Outlet } from 'react-router';

const AdminLayout = () => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<Bannerlogo />
			<Navbar />
			<main className='h-full overflow-y-scroll'>
			<Outlet />
			</main>
			<Footer />
		</div>
);
}

export default AdminLayout