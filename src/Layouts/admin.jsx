import Navbar from '../components/navbar';
import Footer from '../components/Footer'
import Bannerlogo from '../components/Bannerlogo'
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAuth } from 'context/authContext';
import { RENOVAR_TOKEN } from 'graphql/auth/mutations';
import { useNavigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

const AdminLayout = () => {

	const navigate = useNavigate();
	const { setToken } = useAuth();
	const [loadingAuth, setLoadingAuth] = useState(true);

	// falta captura de error de mutacion
	const [renovarToken, { data: dataMutation, loading: loadingMutation }] = useMutation(RENOVAR_TOKEN);

	useEffect(() => {
		renovarToken();
	}, [renovarToken]);

	useEffect(() => {
		if (dataMutation) {
			if (dataMutation.renovarToken.token) {
				setToken(dataMutation.renovarToken.token);
			} else {
				setToken(null);
				navigate('/login');
			}
			setLoadingAuth(false);
		}
	}, [dataMutation, setToken, loadingAuth, navigate]);

	if (loadingMutation || loadingAuth) return <ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;
	return (
		<div className='flex flex-col justify-between h-screen'>
			<Bannerlogo />
			<Navbar />
			<main className='h-full overflow-y-scroll'>
			<Outlet />
			</main>
			<ToastContainer />
			<Footer />
		</div>
);
}

export default AdminLayout