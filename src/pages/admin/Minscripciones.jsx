import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_INSCRIPCIONESLIDER } from 'graphql/inscripciones/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_EstadoInscripcion } from 'utils/enums';
import ReactLoading from 'react-loading';
import Banner from 'media/banner-inscripciones.png';

const Minscripciones = () => {
	const { data, error, loading } = useQuery(GET_INSCRIPCIONESLIDER);

	useEffect(() => {
		if (error) {
			toast.error('Error consultando las inscripciones');
		}
	}, [error]);

	if (loading)
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
				<img src={Banner} alt='Minscripciones' className='w-full mb-10 h-30' />
			</div>
			{/* <PrivateRoute roleList={['ADMINISTRADOR']}> */}
			<div>
				<table className='tabla'>
					<thead>
						<tr>
							<th>ID Inscripción</th>
							<th>Fecha Inscripción</th>
							<th>Proyecto</th>
							<th>Estudiante</th>
							<th>Estado</th>
							<th>Editar</th>
						</tr>
					</thead>
					<tbody>
						{data && data.InscripcionesAll ? (
							<>
								{data.InscripcionesAll.map((u) => (
									<tr key={u._id}>
										<td>{u._id}</td>
										<td>{u.fechaIngreso}</td>
										<td>{u.proyecto.nombreproyecto}</td>
										<td>{u.estudiante.cedula}</td>
										<td>{Enum_EstadoInscripcion[u.estado]}</td>
										<td className='text-center'>
											<Link to={`/minscripciones/editarinscripciones/${u._id}`}>
												<i className='text-yellow-600 cursor-pointer fas fa-pen hover:text-yellow-400' />
											</Link>
										</td>
									</tr>
								))}
							</>
						) : (
							<div>No autorizado</div>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Minscripciones;
