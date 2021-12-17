import React from 'react';
import { useMutation } from '@apollo/client';
import ReactLoading from 'react-loading';
import { CREAR_USUARIO } from 'graphql/usuarios/mutations';
import { toast } from 'react-toastify';
import ButtonLoading from 'components/ButtonLoading';
import { useNavigate } from 'react-router-dom';
import Banner from 'media/banner-usuarios.png';
import DropDown from 'components/Dropdown';
import { Enum_Tusuario } from 'utils/enums';
import useFormData from 'hooks/useFormData';

const Usuarios = () => {
	const navigate = useNavigate();
	const { form, formData, updateFormData } = useFormData();

	const [
		crearUsuario,
		{ data: mutationData, loading: mutationLoading, error: mutationError },
	] = useMutation(CREAR_USUARIO);

	const submitForm = (e) => {
		e.preventDefault();

		crearUsuario({
			variables: formData,
		});

		navigate('/admin/musuarios/');
	};

	if (mutationLoading)
		return (
			<ReactLoading
				type='spinningBubbles'
				color='#0040FF'
				height={667}
				width={375}
			/>
		);

	if (mutationData) return toast.sucess('Usaurio creado con exito');
	if (mutationError) return toast.error('Error creando el usuario');

	return (
		<div className='flex flex-col items-center min-h-screen py-2 bg-white'>
			<div>
				<img src={Banner} alt='Usuarios' className='w-full mb-10 h-30' />
			</div>
			<form
				ref={form}
				onChange={updateFormData}
				onSubmit={submitForm}
				className='flex flex-col w-1/5 bg-white'
			>
				<label className='flex flex-col py-1' htmlFor='nombres'>
					<label className='mx-2 font-semibold'>Nombres</label>
					<input
						name='nombres'
						type='text'
						required
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='apellidos'>
					<label className='mx-2 font-semibold'>Apellidos</label>
					<input
						name='apellidos'
						type='text'
						required
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='cedula'>
					<label className='mx-2 font-semibold'>Cedula</label>
					<input
						name='cedula'
						type='text'
						required
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1 ' htmlFor='correo'>
					<label className='mx-2 font-semibold'>Correo</label>
					<input
						name='correo'
						type='email'
						required
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1 ' htmlFor='password'>
					<label className='mx-2 font-semibold'>Contraseña</label>
					<input
						name='password'
						type='password'
						required
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<div className='grid grid-cols-1 mx-2 font-semibold rounded-md '>
					<DropDown
						label='Tipo Usuario'
						options={Enum_Tusuario}
						name='tusuario'
						required
					/>
				</div>
				<div className='grid grid-cols-1 py-4 rounded-md'>
					<ButtonLoading
						disabled={Object.keys(formData).length === 0}
						loading={false}
						text='Crear Usuario'
					/>
				</div>
			</form>
		</div>
	);
};
export default Usuarios;
