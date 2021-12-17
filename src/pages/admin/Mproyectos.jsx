import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { PROYECTOS } from 'graphql/proyectos/queries';
import DropDown from 'components/Dropdown';
import { Dialog } from '@mui/material';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from 'utils/enums';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';
import useFormData from 'hooks/useFormData';
import ComponentePrivado from 'components/ComponentePrivado';
import { Link } from 'react-router-dom';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutations';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';
import {
	AccordionStyled,
	AccordionSummaryStyled,
	AccordionDetailsStyled,
} from 'components/Accordion';
import ReactLoading from 'react-loading';
import Banner from 'media/banner-admproyectos.png';

const Mproyectos = () => {
	const { data: queryData, loading, error } = useQuery(PROYECTOS);

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
		return (
			<div className='text-2xl font-bold bg-red-700'>
				Ha ocurrido un error en la consulta con la base de datos{' '}
			</div>
		);

	if (queryData.Proyectos) {
		return (
			<div className='flex flex-col items-center min-h-screen py-2 bg-white'>
				<div>
					<img src={Banner} alt='Mproyecto' className='w-full mb-10 h-30' />
				</div>
				<ComponentePrivado listaRoles={['Administrador', 'Lider']}>
					<div className='self-center my-2'>
						<button
							type='button'
							className='px-6 py-3 my-4 text-base font-semibold text-white bg-yellow-600 shadow-md rounded-xl hover:bg-yellow-700 disabled:opacity-50 disabled:bg-gray-700'
						>
							<Link to='/admin/proyecto/'>Crear nuevo proyecto</Link>
						</button>
					</div>
				</ComponentePrivado>
				{queryData.Proyectos.map((proyecto) => (
					<AccordionProyecto proyecto={proyecto} key={proyecto._id} />
				))}
			</div>
		);
	}

	return <></>;
};

const AccordionProyecto = ({ proyecto }) => {
	const [showDialog, setShowDialog] = useState(false);
	const [showDialog1, setShowDialog1] = useState(false);
	return (
		<div className='w-1/2'>
			<div className='grid-cols-3 gap-5'>
				<div />
				<AccordionStyled>
					<AccordionSummaryStyled
						expandIcon={<i className='fas fa-chevron-down text-gray-100' />}
					>
						<div className='flex justify-between w-full'>
							<div className='font-bold text-gray-100 uppercase '>
								{proyecto.nombreproyecto} - {proyecto.estado}
							</div>
						</div>
					</AccordionSummaryStyled>
					<AccordionDetailsStyled>
						<ComponentePrivado listaRoles={['Administrador']}>
							<button
								type='submit'
								className='px-3 py-3 mt-4 ml-2 mr-3 text-base font-semibold text-white bg-yellow-600 shadow-md rounded-xl hover:bg-yellow-700 disabled:opacity-50 disabled:bg-gray-700 col-span-2'
								onClick={() => {
									setShowDialog(true);
								}}
							>
								Editar Estado
							</button>

							<button
								type='submit'
								className='px-3 py-3 mt-4 text-base font-semibold text-white bg-yellow-600 shadow-md rounded-xl hover:bg-yellow-700 disabled:opacity-50 disabled:bg-gray-700 col-span-2'
								onClick={() => {
									setShowDialog1(true);
								}}
							>
								Editar Fase
							</button>
						</ComponentePrivado>
						<ComponentePrivado listaRoles={['Estudiante']}>
							<InscripcionProyecto
								idProyecto={proyecto._id}
								estado={proyecto.estado}
								inscripciones={proyecto.inscripciones}
							/>
						</ComponentePrivado>
						<div className='mt-4'>
							<label className='w-18 mx-2 font-semibold'>Liderado por:</label>
							<label className='font-normal'>{proyecto.lider.correo}</label>
						</div>
						<div className='flex'>
							{proyecto.objetivos.map((objetivo) => (
								<Objetivo
									tipo={objetivo.tipo}
									descripcion={objetivo.descripcion}
								/>
							))}
							<div />
						</div>
					</AccordionDetailsStyled>
				</AccordionStyled>
				<Dialog
					open={showDialog}
					onClose={() => {
						setShowDialog(false);
					}}
				>
					<FormEditProyecto _id={proyecto._id} />
				</Dialog>
				<Dialog
					open={showDialog1}
					onClose={() => {
						setShowDialog1(false);
					}}
				>
					<FormEditFaseProyecto _id={proyecto._id} />
				</Dialog>
			</div>
		</div>
	);
};

const FormEditProyecto = ({ _id }) => {
	const { form, formData, updateFormData } = useFormData();
	const [editarProyecto, { data: dataMutation }] = useMutation(EDITAR_PROYECTO);

	const submitForm = (e) => {
		e.preventDefault();
		editarProyecto({
			variables: {
				_id,
				campos: formData,
			},
		});
	};

	if (dataMutation) return toast.sucess('Proyecto editado con exito');

	return (
		<div className='p-4'>
			<h1 className='font-bold'>Modificar Estado del Proyecto</h1>
			<form
				ref={form}
				onChange={updateFormData}
				onSubmit={submitForm}
				className='flex flex-col items-center'
			>
				<DropDown
					label='Estado del Proyecto'
					name='estado'
					options={Enum_EstadoProyecto}
				/>
				<button
					type='submit'
					className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white'
				>
					<i className='text-2xl text-green-500 align-middle fas fa-check-circle' />{' '}
					Confirmar
				</button>
			</form>
		</div>
	);
};

const FormEditFaseProyecto = ({ _id }) => {
	const { form, formData, updateFormData } = useFormData();
	const [editarProyecto, { data: dataMutation }] = useMutation(EDITAR_PROYECTO);

	const submitForm = (e) => {
		e.preventDefault();
		editarProyecto({
			variables: {
				_id,
				campos: formData,
			},
		});
	};

	if (dataMutation) return toast.sucess('Proyecto editado con exito');

	return (
		<div className='p-4'>
			<h1 className='font-bold'>Modificar Fase del Proyecto</h1>
			<form
				ref={form}
				onChange={updateFormData}
				onSubmit={submitForm}
				className='flex flex-col items-center'
			>
				<DropDown
					label='Fase del Proyecto'
					name='fase'
					options={Enum_FaseProyecto}
				/>
				<button
					type='submit'
					className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white'
				>
					<i className='text-2xl text-green-500 align-middle fas fa-check-circle' />{' '}
					Confirmar
				</button>
			</form>
		</div>
	);
};

const Objetivo = ({ tipo, descripcion }) => (
	<div className='flex flex-col items-center justify-center p-6 mx-5 my-5 rounded-lg shadow-xl bg-gray-50'>
		<div className='text-lg font-bold'>{tipo}</div>
		<div className='text-center m-4 text-normal'>{descripcion}</div>
		<ComponentePrivado listaRoles={['Administrador', 'Lider']}>
			<div>
				<button
					type='submit'
					className='px-3 py-3 text-base font-semibold text-white theadcolor shadow-md rounded-xl disabled:opacity-50 disabled:bg-gray-700 col-span-2'
				>
					Editar
				</button>
			</div>
		</ComponentePrivado>
	</div>
);

const InscripcionProyecto = ({ idProyecto, inscripciones }) => {
	const [estadoInscripcion, setEstadoInscripcion] = useState('');
	const [crearInscripcion, { data }] = useMutation(CREAR_INSCRIPCION);
	const { userData } = useUser();

	useEffect(() => {
		if (userData && inscripciones) {
			const flt = inscripciones.filter(
				(el) => el.estudiante._id === userData._id
			);
			if (flt.length > 0) {
				setEstadoInscripcion(flt[0].estado);
			}
		}
	}, [userData, inscripciones]);

	useEffect(() => {
		if (data) {
			toast.success('inscripcion creada con exito');
		}
	}, [data]);

	const confirmarInscripcion = () => {
		crearInscripcion({
			variables: { proyecto: idProyecto, estudiante: userData._id },
		});
	};

	return (
		<>
			{estadoInscripcion !== '' ? (
				<span>
					Ya estás inscrito en este proyecto y el estado es {estadoInscripcion}
				</span>
			) : (
				<button
					type='submit'
					className='px-3 py-3 mt-4 ml-3 text-base font-semibold text-white bg-yellow-600 shadow-md rounded-xl hover:bg-yellow-700 disabled:opacity-50 disabled:bg-gray-700 col-span-2'
					onClick={() => confirmarInscripcion()}
				>
					Inscribirme
				</button>
			)}
		</>
	);
};

export default Mproyectos;
