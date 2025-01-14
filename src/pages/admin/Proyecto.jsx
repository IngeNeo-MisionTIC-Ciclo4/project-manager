import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { nanoid } from 'nanoid';
import ReactLoading from 'react-loading';
import ButtonLoading from 'components/ButtonLoading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Banner from 'media/banner-crearproyectos.png';
import useFormData from 'hooks/useFormData';
import { Enum_TipoObjetivo } from 'utils/enums';
import { ObjContext, useObj } from 'context/objContext';
import { CREAR_PROYECTO } from 'graphql/proyectos/mutations';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import DropDown from 'components/Dropdown';

const Proyecto = () => {
	const navigate = useNavigate();
	const { form, formData, updateFormData } = useFormData();
	const [listaUsuarios, setListaUsuarios] = useState({});
	const { data, loading, error } = useQuery(GET_USUARIOS, {
		variables: {
			filtro: { tusuario: 'Lider', estado: 'Autorizado' },
		},
	});

	const [
		crearProyecto,
		{ data: mutationData, loading: mutationLoading, error: mutationError },
	] = useMutation(CREAR_PROYECTO);

	useEffect(() => {
		if (data) {
			const lu = {};
			data.Usuarios.forEach((elemento) => {
				lu[elemento._id] = elemento.nombres;
			});

			setListaUsuarios(lu);
		}
	}, [data]);

	const submitForm = (e) => {
		e.preventDefault();

		formData.objetivos = Object.values(formData.objetivos);
		formData.presupuesto = parseFloat(formData.presupuesto);

		crearProyecto({
			variables: formData,
		});

		navigate('/admin/mproyectos/');
	};

	if (loading)
		return (
			<ReactLoading
				type='spinningBubbles'
				color='#0040FF'
				height={667}
				width={375}
			/>
		);
	if (error)
		return toast.error(
			'A ocurrido un error en la consulta con la base de datos'
		);
	if (mutationLoading)
		return (
			<ReactLoading
				type='spinningBubbles'
				color='#0040FF'
				height={667}
				width={375}
			/>
		);
	if (mutationData) return toast.sucess('Proyecto creado con exito');

	if (mutationError)
		return toast.error(
			'A ocurrido un error en la consulta con la base de datos'
		);

	return (
		<div className='flex flex-col items-center min-h-screen py-2 bg-white'>
			<div>
				<img src={Banner} alt='Proyecto' className='w-full mb-10 h-30' />
			</div>
			<form
				ref={form}
				onChange={updateFormData}
				onSubmit={submitForm}
				className='p-5 space-y-2 bg-white w-1/2'
			>
				<div className='grid grid-cols-3 gap-5 text-center rounded-md' />
				<div className='grid flex-col grid-cols-2 gap-5'>
					<label htmlFor='nombre' className='mx-2 font-semibold'>
						{' '}
						Nombre proyecto
						<input
							name='nombreproyecto'
							type='text'
							required
							className='w-full p-2 mt-2 text-gray-900 border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
						/>
					</label>
					<label htmlFor='presupuesto' className='mx-2 font-semibold'>
						{' '}
						Presupuesto
						<input
							name='presupuesto'
							type='number'
							required
							className='w-full p-2 mt-2 text-gray-900 border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
						/>
					</label>
				</div>
				<div className='grid flex-col grid-cols-1 mx-2 font-semibold'>
					<DropDown
						label='Líder'
						options={listaUsuarios}
						name='lider'
						required={false}
					/>
				</div>
				<div className='mx-2 font-semibold'>
					<Objetivos />
				</div>
				<div className='grid grid-cols-1 py-4 font-semibold rounded-md'>
					<ButtonLoading
						text='Crear Proyecto'
						loading={false}
						disabled={false}
					/>
				</div>
			</form>
		</div>
	);
};

const Objetivos = () => {
	const [listaObjetivos, setListaObjetivos] = useState([]);
	const [maxObjetivos, setMaxObjetivos] = useState(false);

	const eliminarObjetivo = (id) => {
		setListaObjetivos(listaObjetivos.filter((el) => el.props.id !== id));
	};

	const componenteObjetivoAgregado = () => {
		const id = nanoid();
		return <FormObjetivo key={id} id={id} />;
	};

	useEffect(() => {
		if (listaObjetivos.length > 4) {
			setMaxObjetivos(true);
		} else {
			setMaxObjetivos(false);
		}
	}, [listaObjetivos]);

	return (
		<ObjContext.Provider value={{ eliminarObjetivo }}>
			<div>
				<span>Objetivos del Proyecto</span>
				{!maxObjetivos && (
					<button
						type='button'
						onClick={() =>
							setListaObjetivos([
								...listaObjetivos,
								componenteObjetivoAgregado(),
							])
						}
					>
						<i className='p-2 mx-2 text-white bg-green-500 rounded-full cursor-pointer fas fa-plus hover:bg-green-600' />
					</button>
				)}
				{listaObjetivos.map((objetivo) => objetivo)}
			</div>
		</ObjContext.Provider>
	);
};

const FormObjetivo = ({ id }) => {
	const { eliminarObjetivo } = useObj();
	return (
		<div className='grid flex-col items-center grid-cols-3 gap-2'>
			<label>
				{' '}
				Descripción
				<input
					name={`siguiente||objetivos||${id}||descripcion`}
					type='textarea'
					required
					className='w-full p-2 mt-2 text-gray-900 border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
				/>
			</label>
			<DropDown
				name={`siguiente||objetivos||${id}||tipo`}
				options={Enum_TipoObjetivo}
				label='Tipo de Objetivo'
				required
			/>
			<button type='button' onClick={() => eliminarObjetivo(id)}>
				<i className='p-2 w-8 mx-2 mt-7 text-white text-center bg-red-500 rounded-full cursor-pointer items-right fas fa-minus hover:bg-red-600' />
			</button>
		</div>
	);
};

export default Proyecto;
