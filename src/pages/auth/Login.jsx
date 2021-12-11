import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import ButtonLoading from '../../components/ButtonLoading';

const Login = () => {

	const navigate = useNavigate();
	const { setToken } = useAuth();
	const { form, formData, updateFormData } = useFormData();

	const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
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
				navigate('/admin/mproyectos/');
			}
		}
	}, [dataMutation, setToken, navigate]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<h2 className="mt-6 text-3xl font-extrabold text-center text-blue-600"> Inicia sesión en tu cuenta </h2>
				<form className='flex flex-col mt-8 space-y-6' onSubmit={submitForm} onChange={updateFormData} ref={form}>
					<input type="hidden" name="recordar" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<input name="correo" type="email" autoComplete="correo" required={true}
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Correo Electrónico"/>
						</div>
						<div>
							<input id="password" name="password" type="password" autoComplete="current-password" required={true}
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Contraseña" />
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="recordar" name="recordar" type="checkbox"
							className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
							<label htmlFor="recordar" className="block ml-2 text-sm text-gray-900"> {" "} Recuérdame{" "} </label>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<ButtonLoading
							disabled={Object.keys(formData).length === 0}
							loading={mutationLoading}
							text='Iniciar Sesión'
						/>
					</div>

					<div className="flex items-center justify-between">
						<span>¿No tienes cuenta?</span>
						<Link to='/registro'>
							<span className="font-medium text-blue-600 hover:text-blue-500"> Regístrate </span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;