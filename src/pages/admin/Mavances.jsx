import React, { useEffect } from 'react';
import Banner from "../../media/banner-avances.png";
import { useQuery } from '@apollo/client';
import { GET_AVANCES } from 'graphql/avances/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Mavances = () => {
	const { data, error, loading } = useQuery(GET_AVANCES);

	useEffect(() => {
		if (error) {
			toast.error('Error consultando los avances');
		}
	}, [error]);

	if (loading) return <ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;

	return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
			<div>
				<img src={Banner} alt="MAvances" className='w-full mb-10 h-30'></img>
			</div>
			{/* <PrivateRoute roleList={['ADMINISTRADOR']}> */}
			<div>
				<table className='tabla'>
					<thead>
						<tr>
							<th>ID Avance</th>
							<th>Proyecto</th>
							<th>Creado Por Estudiante</th>
							<th>Descripción avance</th>
							<th>Observaciones del líder</th>
							<th>Editar</th>
						</tr>
					</thead>
					<tbody>
						{data && data.Avances ? (
							<>
								{data.Avances.map((u) => {
									return (
										<tr key={u._id}>
											<td>{u._id}</td>
											<td>{u.proyecto.nombreproyecto}</td>
											<td>{u.creadoPorEstudiante.correo}</td>
											<td>{u.descripcion}</td>
											<td>{u.observaciones}</td>
											<td className="text-center">
												<Link to={`/minscripciones/editarinscripciones/${u._id}`}>
													<i className='text-yellow-600 cursor-pointer fas fa-pen hover:text-yellow-400' />
												</Link>
											</td>
										</tr>
									);
								})}
							</>
						) : (
							<div>No autorizado</div>
						)}
					</tbody>
				</table>
			</div>
			{/* 	</PrivateRoute> */}
		</div>
	);
};

export default Mavances;