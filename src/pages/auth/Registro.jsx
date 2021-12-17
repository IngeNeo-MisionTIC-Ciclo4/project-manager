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
import Imgbannerlogo from '../../media/bannerlogo.png';

const Registro = () => {
	const { setToken } = useAuth();
	const navigate = useNavigate();
	const { form, formData, updateFormData } = useFormData();

	const [registro, { data: dataMutation }] = useMutation(REGISTRO);

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
		<div className='flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-white sm:px-6 lg:px-8'>
			<div className='flex flex-col items-center w-full'>
				<img src={Imgbannerlogo} alt='Bannerlogo' className='m-2 w-1/3'></img>
			</div>

			<div className='w-full max-w-md space-y-8'></div>

			<form
				className='flex flex-col items-center mt-4 grid grid-cols-2'
				onSubmit={submitForm}
				onChange={updateFormData}
				ref={form}
			>
				<label className='flex flex-col py-1' htmlFor='nombres'>
					<label className='mx-2 font-semibold'>Nombres</label>
					<input
						name='nombres'
						type='text'
						required={true}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='apellidos'>
					<label className='mx-2 font-semibold'>Apellidos</label>
					<input
						name='apellidos'
						type='text'
						required={true}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='cedula'>
					<label className='mx-2 font-semibold'>Cédula</label>
					<input
						name='cedula'
						type='number'
						required={true}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className=' flex flex-col py-1' htmlFor='correo'>
					<label className='mx-2 font-semibold'>Correo</label>
					<input
						name='correo'
						type='email'
						required={true}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='password'>
					<label className='mx-2 font-semibold'>Contraseña</label>
					<input
						name='password'
						type='password'
						required={true}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<div className='mx-2 font-semibold'>
					<DropDown
						label='Rol deseado'
						options={Enum_Tusuario}
						name='tusuario'
						required={true}
					/>
				</div>
			</form>

			<div className='grid grid-cols-1 py-4 rounded-md'>
				<ButtonLoading
					disabled={Object.keys(formData).length === 0}
					loading={false}
					text='Registrarme'
				/>
			</div>
			<div className='flex items-center justify-between mb-2'>
				<span>¿Ya tienes cuenta?</span>
				<Link to='/login'>
					<span className='px-2 font-medium text-blue-900 hover:text-blue-700'>
						Inicia Sesión
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Registro;
