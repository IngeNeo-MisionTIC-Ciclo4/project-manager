import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { PROYECTOS } from 'graphql/proyectos/queries';
import DropDown from 'components/Dropdown';
import { Dialog } from '@mui/material';
import { Enum_EstadoProyecto } from 'utils/enums';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';
import useFormData from 'hooks/useFormData';
//import PrivateComponent from 'components/PrivateComponent';
import { Link } from 'react-router-dom';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutations';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';
import { AccordionStyled, AccordionSummaryStyled,	AccordionDetailsStyled } from 'components/Accordion';
import ReactLoading from 'react-loading';

const Mproyectos = () => {
	const { data: queryData, loading, error } = useQuery(PROYECTOS);

	useEffect(() => {
		console.log('datos proyecto', queryData);
	}, [queryData]);

	if (loading) return <ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />
	if (error) return <div className='text-2xl font-bold bg-red-700'>A ocurrido un error en la consulta con la base de datos </div>

	if (queryData.Proyectos) {
		return (
			<div className='flex flex-col p-10'>
				<div className='flex items-center justify-center w-full rounded-full'>
					<h1 className='text-2xl font-bold text-blue-800'>Lista de Proyectos</h1>
				</div>
				{/* <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}> */}
					<div className='self-end my-2'>
						<button className='p-2 bg-blue-500 rounded-lg shadow-lg text-gray-50 hover:bg-blue-400'>
							<Link to='/admin/proyecto/'>Crear nuevo proyecto</Link>
						</button>
					</div>
				{/* </PrivateComponent> */}
				{queryData.Proyectos.map((proyecto) => {

					return <AccordionProyecto proyecto={proyecto} />;
				})}
			</div>
		);
	}

	return <></>;
};

const AccordionProyecto = ({ proyecto }) => {
	const [showDialog, setShowDialog] = useState(false);
	return (
		<>
			<AccordionStyled>
				<AccordionSummaryStyled expandIcon={<i className='fas fa-chevron-down' />}>
					<div className='flex justify-between w-full'>
						<div className='font-bold text-gray-100 uppercase '>
							{proyecto.nombreproyecto} - {proyecto.estado}
						</div>
					</div>
				</AccordionSummaryStyled>
				<AccordionDetailsStyled>
					{/* <PrivateComponent roleList={['ADMINISTRADOR']}> */}
						<i
							className='mx-4 text-yellow-600 fas fa-pen hover:text-yellow-400'
							onClick={() => {
								setShowDialog(true);
							}}
						/>
					{/* </PrivateComponent> */}
					{/* <PrivateComponent roleList={['ESTUDIANTE']}> */}
						<InscripcionProyecto
							idProyecto={proyecto._id}
							estado={proyecto.estado}
							inscripciones={proyecto.inscripciones}
						/>
					{/* </PrivateComponent> */}
					<div>Liderado Por: {proyecto.lider.correo}</div>
					<div className='flex'>
						{proyecto.objetivos.map((objetivo) => {
							return <Objetivo tipo={objetivo.tipo} descripcion={objetivo.descripcion} />;
						})}
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
		</>
	);
};

const FormEditProyecto = ({ _id }) => {
	const { form, formData, updateFormData } = useFormData();
	const [editarProyecto, { data: dataMutation, loading, error }] = useMutation(EDITAR_PROYECTO);

	const submitForm = (e) => {
		e.preventDefault();
		editarProyecto({
			variables: {
				_id,
				campos: formData,
			},
		});
	};

	useEffect(() => {
		console.log('data mutation', dataMutation);
	}, [dataMutation]);

	return (
		<div className='p-4'>
			<h1 className='font-bold'>Modificar Estado del Proyecto</h1>
			<form
				ref={form}
				onChange={updateFormData}
				onSubmit={submitForm}
				className='flex flex-col items-center'
			>
				<DropDown label='Estado del Proyecto' name='estado' options={Enum_EstadoProyecto} />
				{/* <ButtonLoading disabled={false} loading={loading} text='Confirmar' /> */}
				<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white'>
					<i className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Confirmar
				</button>
			</form>
		</div>
	);
};

const Objetivo = ({ tipo, descripcion }) => {
	return (
		<div className='flex flex-col items-center justify-center p-8 mx-5 my-4 rounded-lg shadow-xl bg-gray-50'>
			<div className='text-lg font-bold'>{tipo}</div>
			<div>{descripcion}</div>
			{/* <PrivateComponent roleList={['ADMINISTRADOR']}> */}
				<div>Editar</div>
			{/* </PrivateComponent> */}
		</div>
	);
};

const InscripcionProyecto = ({ idProyecto, estado, inscripciones }) => {
	const [estadoInscripcion, setEstadoInscripcion] = useState('');
	const [crearInscripcion, { data, loading, error }] = useMutation(CREAR_INSCRIPCION);
	const { userData } = useUser();

	useEffect(() => {
		if (userData && inscripciones) {
			const flt = inscripciones.filter((el) => el.estudiante._id === userData._id);
			if (flt.length > 0) {
				setEstadoInscripcion(flt[0].estado);
			}
		}
	}, [userData, inscripciones]);

	useEffect(() => {
		if (data) {
			console.log(data);
			toast.success('inscripcion creada con exito');
		}
	}, [data]);

	const confirmarInscripcion = () => {
		crearInscripcion({ variables: { proyecto: idProyecto, estudiante: userData._id } });
	};

	return (
		<>
			{estadoInscripcion !== '' ? (
				<span>Ya estas inscrito en este proyecto y el estado es {estadoInscripcion}</span>
			) : (
				<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-500 hover:text-white' onClick={() => confirmarInscripcion()}>
					<i className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Inscribirme en este proyecto
				</button>
			)}
		</>
	);
};

export default Mproyectos;