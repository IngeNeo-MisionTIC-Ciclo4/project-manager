import Logoproyecto from "../../media/education-icon.png";
import Banner from "../../media/banner-crearproyectos.png";
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import  useFormData from '../../hooks/useFormData';
import { Enum_TipoObjetivo } from '../../utils/enums';
import { nanoid } from 'nanoid';
import { ObjContext, useObj } from '../../context/objContext';
import { CREAR_PROYECTO } from '../../graphql/proyectos/mutations'
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import DropDown from "../../components/Dropdown";
import ReactLoading from 'react-loading';

const Proyecto = () => {

	const { form, formData, updateFormData } = useFormData();
	const [listaUsuarios, setListaUsuarios] = useState({});
	const { data, loading, error } = useQuery(GET_USUARIOS);

	const [crearProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
		useMutation(CREAR_PROYECTO);

	useEffect(() => {
		console.log(data);
		if (data) {
			const lu = {};
			data.Usuarios.forEach((elemento) => {
				lu[elemento._id] = elemento.nombres;
			});

			setListaUsuarios(lu);
		}
	}, [data]);

	useEffect(() => {
		console.log('data mutation', mutationData);
	});

	const submitForm = (e) => {
		e.preventDefault();

		formData.objetivos = Object.values(formData.objetivos);
		formData.presupuesto = parseFloat(formData.presupuesto);

		crearProyecto({
			variables: formData,
		});
	};

	if (loading) return <ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;


		return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
						<div>
				<img src={Banner} alt="Proyecto" className='w-full mb-10 h-30'></img>
		</div>
				<form ref={form} onChange={updateFormData} onSubmit={submitForm} className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
						<div className="grid grid-cols-3 gap-5 text-center rounded-md">
							<div></div>
							<div>
								<img src={Logoproyecto} alt="Proyecto" width="150px"></img>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-5 rounded-md">
								<label htmlFor="nombre"> Nombre proyecto
								<input name= "nombreproyecto" type="text" required={true}
											className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
											placeholder="Nombre proyecto"/>
								</label>
								<label htmlFor="presupuesto"> Presupuesto
							<input name="presupuesto" type="number" required={true}
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
											placeholder="Presupuesto"/>
								</label>
						</div>
						<div className="grid grid-cols-1 rounded-md">
							<DropDown label='Líder' options={listaUsuarios} name='lider' required={false} />
						</div>
						<Objetivos />
						<div className="grid grid-cols-1 py-4 rounded-md">
								<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white'>
								<i className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Crear Proyecto
								</button>
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
					<i
						onClick={() => setListaObjetivos([...listaObjetivos, componenteObjetivoAgregado()])}
						className='p-2 mx-2 text-white bg-green-500 rounded-full cursor-pointer fas fa-plus hover:bg-green-400'
					/>
				)}
				{listaObjetivos.map((objetivo) => {
					return objetivo;
				})}
			</div>
		</ObjContext.Provider>
	);
};

const FormObjetivo = ({ id }) => {
	const { eliminarObjetivo } = useObj();
	return (
		<div className='flex items-center'>
			<label> Descripción
				<input name={`siguiente||objetivos||${id}||descripcion`} type="textarea" required={true}
					className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
					placeholder="Descripción del objetivo" />
			</label>
			<DropDown
				name={`nested||objetivos||${id}||tipo`}
				options={Enum_TipoObjetivo}
				label='Tipo de Objetivo'
				required={true}
			/>
			<i
				onClick={() => eliminarObjetivo(id)}
				className='p-2 mx-2 mt-6 text-white bg-red-500 rounded-full cursor-pointer fas fa-minus hover:bg-red-400'
			/>
		</div>
	);
};

export default Proyecto;