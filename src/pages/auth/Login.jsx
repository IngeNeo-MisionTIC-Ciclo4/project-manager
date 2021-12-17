import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import ButtonLoading from '../../components/ButtonLoading';
import Imgbannerlogo from '../../media/bannerlogo.png';

const Login = () => {
	const navigate = useNavigate();
	const { setToken } = useAuth();
	const { form, formData, updateFormData } = useFormData();

	const [login, { data: dataMutation, loading: mutationLoading }] =
		useMutation(LOGIN);

	const submitForm = (e) => {
		e.preventDefault();

		login({
			variables: formData,
		});
	};

	useEffect(() => {
		if (dataMutation) {
			if (dataMutation.login.token) {
				setToken(dataMutation.login.token);
				navigate('/perfil');
			}
		}
	}, [dataMutation, setToken, navigate]);

	return (
		<div className='flex flex-col items-center min-h-screen px-4 py-2 bg-white sm:px-6 lg:px-8'>
			<div className='flex flex-col items-center w-full'>
				<img src={Imgbannerlogo} alt='Bannerlogo' className='m-2 w-1/3'></img>
			</div>
			<div className='w-full max-w-md space-y-8'>
				<form
					className='flex flex-col items-center mt-4'
					onSubmit={submitForm}
					onChange={updateFormData}
					ref={form}
				>
					<input type='hidden' name='recordar' defaultValue='true' />
					<div className='-space-y-px'>
						<div>
							<label className='mx-2 font-semibold'>Correo Electrónico</label>
							<input
								name='correo'
								type='email'
								autoComplete='correo'
								required={true}
								className='w-full p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
							/>
						</div>
						<div>
							<label className='mx-2 font-semibold'>Contraseña</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required={true}
								className='w-full p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
							/>
						</div>
					</div>

					<div className='flex items-start justify-start py-4'>
						<div className='flex items-start justify-start'>
							<input
								id='recordar'
								name='recordar'
								type='checkbox'
								className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
							/>
							<label
								htmlFor='recordar'
								className='block ml-2 text-sm text-gray-900'
							>
								{' '}
								Recuérdame{' '}
							</label>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<ButtonLoading
							disabled={Object.keys(formData).length === 0}
							loading={mutationLoading}
							text='Iniciar Sesión'
						/>
					</div>

					<div className='flex items-center justify-between py-2'>
						<span>¿No tienes cuenta?</span>
						<Link to='/registro'>
							<span className='px-2 font-medium text-blue-900 hover:text-blue-700'>
								{' '}
								Regístrate{' '}
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
