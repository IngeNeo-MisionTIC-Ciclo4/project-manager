import React, { useEffect } from 'react';
import { Enum_Tusuario } from 'utils/enums';
import ButtonLoading from 'components/ButtonLoading';
import DropDown from 'components/Dropdown';
import useFormData from 'hooks/useFormData';
import { Link } from 'react-router-dom';
import { REGISTRO } from 'graphql/auth/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useAuth } from 'context/authContext';

const Registro = () => {

	const { setToken } = useAuth();
	const navigate = useNavigate();
	const { form, formData, updateFormData } = useFormData();

	const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
		useMutation(REGISTRO);

	const submitForm = (e) => {
		e.preventDefault();
		registro({ variables: formData });
	};

	useEffect(() => {
		if (dataMutation) {
			if (dataMutation.registro.token) {
				setToken(dataMutation.registro.token);
				navigate('/admin/mproyectos');
			}
		}
	}, [dataMutation, setToken, navigate]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>Crea tu cuenta</h2>
			<form className='mt-8 space-y-6' onSubmit={submitForm} onChange={updateFormData} ref={form}>
				<div className='grid grid-cols-2 gap-2 rounded-md shadow-sm'>
					<label htmlFor='cedula'> Cedula
						<input name='cedula' type='text' required={true}
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu numero cedula' />
					</label>
					<label htmlFor='nombres'> Nombre
						<input name='nombres' type='text' autoComplete='nombres' required={true}
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tus nombres'/>
					</label>
					<label htmlFor='apellidos'> Apellido
						<input name='apellidos' type='text' required={true}
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tus Apellidos'/>
					</label>

					<label htmlFor='correo'>Correo electrónico
						<input name='correo' type='email' required={true}
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' />
					</label>
					<label htmlFor='password'> Contraseña
						<input name='password' type='password' required={true}
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'/>
					</label>
					<DropDown label='Rol deseado:' name='tusuario' required={true} options={Enum_Tusuario} />
				</div>

				<div>
					<ButtonLoading
						disabled={Object.keys(formData).length === 0}
						loading={false}
						text='Registrarme'
					/>
				</div>

				<div className='flex items-center justify-between'>
					<span>¿Ya tienes cuenta?</span>
					<Link to='/login'>
						<span className='font-medium text-blue-600 hover:text-blue-500'>Inicia Sesión</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Registro;