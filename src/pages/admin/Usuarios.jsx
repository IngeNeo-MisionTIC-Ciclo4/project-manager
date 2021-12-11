import Logoproyecto from "../../media/education-icon.png";
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import useFormData from '../../hooks/useFormData';
import { Enum_Tusuario } from '../../utils/enums';
import DropDown from "../../components/Dropdown";
import ReactLoading from 'react-loading';
import { CREAR_USUARIO } from 'graphql/usuarios/mutations'
import { toast } from 'react-toastify';
import Banner from "../../media/banner-usuarios.png";

const Usuarios = () => {
	const { form, formData, updateFormData } = useFormData();

	const [crearUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
		useMutation(CREAR_USUARIO);

	useEffect(() => {
		console.log('Datos de la mutacion', mutationData);
	});

	const submitForm = (e) => {
		e.preventDefault();

		crearUsuario({
			variables: formData,
		});
	};

	if (mutationLoading) return <ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;

	if (mutationError) return toast.error('Error creando el usuario');

	return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
            <div>
				<img src={Banner} alt="Usuarios" className='mb-10 w-full h-30'></img>
			</div>
			<form ref={form} onChange={updateFormData} onSubmit={submitForm} className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
				<div className="grid grid-cols-3 gap-5 text-center rounded-md">
					<div></div>
					<div>
						<img src={Logoproyecto} alt="Usuarios" width="150px"></img>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5 rounded-md">
					<label htmlFor="nombres"> Nombres
						<input name="nombres" type="text" required={true}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Nombres del usuario" />
					</label>
					<label htmlFor="apellidos"> Apellidos
						<input name="apellidos" type="text" required={true}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Apellidos del usuario" />
					</label>
					<label htmlFor="cedula"> Cedula
						<input name="cedula" type="number" required={true}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Cedula del usuario" />
					</label>
					<label htmlFor="correo"> Correo
						<input name="correo" type="email" required={true}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Correo del usuario" />
					</label>
				</div>
				<div className="grid grid-cols-1 rounded-md">
					<DropDown label='Tipo Usuario' options={Enum_Tusuario} name='tusuario' required={true} />
				</div>
				<div className="grid grid-cols-1 py-4 rounded-md">
					<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white'>
						<i className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Crear Usuario
					</button>
				</div>
			</form>
		</div>
	);
};
export default Usuarios;