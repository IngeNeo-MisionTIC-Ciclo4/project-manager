import Navbar from '../components/navbar';
import Footer from '../components/Footer'
import React from 'react'

const AdminLayout = ({children}) => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<Navbar />
			<main className='h-full overflow-y-scroll'>{children}</main>
			<Footer />
		</div>
);
}

export default AdminLayout
