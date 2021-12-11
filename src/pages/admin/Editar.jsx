import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';
import DropDown from 'components/Dropdown';
import { Enum_EstadoUsuario } from 'utils/enums';
import { useNavigate } from 'react-router';

const EditarUsuario = () => {

	const navigate = useNavigate();
	const { form, formData, updateFormData } = useFormData(null);
	const { _id } = useParams();

	const {
		data: queryData,
		error: queryError,
		loading: queryLoading,
	} = useQuery(GET_USUARIO, {
		variables: { _id },
	});


	const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
		useMutation(EDITAR_USUARIO);

	const submitForm = (e) => {
		e.preventDefault();
		delete formData.rol;
		editarUsuario({
			variables: { _id, ...formData },
		});

		navigate('/admin/musuarios');
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

		if (queryError) {
			toast.error('Error consultando el usuario');
		}
	}, [queryError, mutationError]);

	if (queryLoading) return <div>Cargando....</div>;

	return (
		<div className='flex-col items-center justify-center w-full h-full p-10 flew'>
			<Link to='/admin/musuarios'>
				<i className='text-xl font-bold text-gray-600 cursor-pointer fas fa-arrow-left hover:text-gray-900' />
			</Link>
			<h1 className='m-4 text-3xl font-bold text-center text-gray-800'>Editar Usuario</h1>
			<form
				onSubmit={submitForm}
				onChange={updateFormData}
				ref={form}
				className='flex flex-col items-center justify-center'
			>
				<label htmlFor="nombres"> Nombres
					<input name="nombres" type="text" required={true} defaultValue={queryData.Usuario.nombres}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Nombres del usuario" />
					</label>
					<label htmlFor="apellidos"> Apellidos
					<input name="apellidos" type="text" required={true} defaultValue={queryData.Usuario.apellidos}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Apellidos del usuario" />
					</label>
					<label htmlFor="cedula"> Cedula
					<input name="cedula" type="text" required={true} defaultValue={queryData.Usuario.cedula}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Cedula del usuario" />
					</label>
					<label htmlFor="correo"> Correo electrónico
					<input name="correo" type="email" required={true} defaultValue={queryData.Usuario.correo}
							className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Correo del usuario" />
					</label>
				<DropDown
					label='Estado de la persona:'
					name='estado'
					defaultValue={queryData.Usuario.estado}
					required={true}
					options={Enum_EstadoUsuario}
				/>
				<span>Tipo de usuario: {queryData.Usuario.tusuario}</span>
				<ButtonLoading
					disabled={Object.keys(formData).length === 0}
					loading={mutationLoading}
					text='Confirmar'
				/>
			</form>
		</div>
	);
};

export default EditarUsuario;
