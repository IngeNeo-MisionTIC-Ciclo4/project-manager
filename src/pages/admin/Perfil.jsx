import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';
import { useNavigate } from 'react-router';
import ReactLoading from 'react-loading';
import Banner from '../../media/banner-perfil.png';
import { useUser } from 'context/userContext';

const Perfil = () => {
	const navigate = useNavigate();
	const { userData } = useUser();
	const { form, formData, updateFormData } = useFormData(null);
	const _id = userData._id;
	console.log(_id);

	const [
		editarUsuario,
		{ data: mutationData, loading: mutationLoading, error: mutationError },
	] = useMutation(EDITAR_USUARIO);

	const submitForm = (e) => {
		e.preventDefault();
		delete formData.rol;
		editarUsuario({
			variables: { _id, ...formData },
		});

		navigate('/perfil');
	};

	useEffect(() => {
		if (mutationData) {
			toast.success('Usuario modificado correctamente');
		}
	}, [mutationData]);

	useEffect(() => {
		if (mutationError) {
			toast.error('Error modificando el usuario');
		}
	}, [mutationError]);

	if (mutationLoading)
		return (
			<ReactLoading
				type='spinningBubbles'
				color='#0040FF'
				height={667}
				width={375}
			/>
		);

	return (
		<div className='flex flex-col items-center min-h-screen py-2 bg-white'>
			<div>
				<img src={Banner} alt='Usuarios' className='w-full mb-10 h-30'></img>
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
						required={true}
						defaultValue={userData.nombres}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='apellidos'>
					<label className='mx-2 font-semibold'>Apellidos</label>
					<input
						name='apellidos'
						type='text'
						required={true}
						defaultValue={userData.apellidos}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1' htmlFor='cedula'>
					<label className='mx-2 font-semibold'>Cedula</label>
					<input
						name='cedula'
						type='text'
						required={true}
						defaultValue={userData.cedula}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<label className='flex flex-col py-1 ' htmlFor='correo'>
					<label className='mx-2 font-semibold'>Correo</label>
					<input
						name='correo'
						type='email'
						required={true}
						defaultValue={userData.correo}
						className='p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
					/>
				</label>
				<span>Tipo de usuario: {userData.tusuario}</span>
				<ButtonLoading
					disabled={Object.keys(formData).length === 0}
					loading={mutationLoading}
					text='Confirmar'
				/>
			</form>
		</div>
	);
};

export default Perfil;
