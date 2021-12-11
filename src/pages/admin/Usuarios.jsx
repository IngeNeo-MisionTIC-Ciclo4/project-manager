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
				<img src={Banner} alt="Usuarios" className='w-full mb-10 h-30'></img>
			</div>
			<form ref={form} onChange={updateFormData} onSubmit={submitForm} className="bg-white flex flex-col w-1/5">
					<label className="flex flex-col py-1" htmlFor="nombres"> 
						<label className="mx-2 font-semibold">
							Nombres
						</label>
						<input name="nombres" type="text" required={true}
							className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner"/>
					</label>
					<label className="flex flex-col py-1" htmlFor="apellidos">
						<label className="mx-2 font-semibold">
							Apellidos
						</label>
						<input name="apellidos" type="text" required={true}
							className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner"/>
					</label>
					<label className="flex flex-col py-1" htmlFor="cedula">
						<label className="mx-2 font-semibold">
							Cedula
						</label>
						<input name="cedula" type="number" required={true}
							className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner"/>
					</label>
					<label className=" flex flex-col py-1" htmlFor="correo">
						<label className="mx-2 font-semibold">
							Correo
						</label>
						<input name="correo" type="email" required={true}
							className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner"/>
					</label>
				<div className="grid grid-cols-1 rounded-md mx-2 font-semibold ">
					<DropDown label='Tipo Usuario' options={Enum_Tusuario} name='tusuario' required={true} />
				</div>
				<div className="grid grid-cols-1 py-4 rounded-md">
					<button type='submit' className='col-span-2 p-2 font-bold border-2 border-t-4 text-white rounded-lg shadow-md bg-yellow-600 hover:bg-yellow-700'>
						<i className="text-2xl text-green-500 align-middle"></i> Crear Usuario
					</button>
				</div>
			</form>
		</div>
	);
};
export default Usuarios;