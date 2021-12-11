import React, { useEffect } from 'react';
import Banner from "../../media/banner-musuarios.png";
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Tusuario, Enum_EstadoUsuario } from 'utils/enums';

const Musuarios = () => {
	const { data, error, loading } = useQuery(GET_USUARIOS);

	useEffect(() => {
		if (error) {
			toast.error('Error consultando los usuarios');
		}
	}, [error]);

	if (loading) return <div>Cargando....</div>;

	return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
			<div>
				<img src={Banner} alt="Musuarios" className='w-full mb-10 h-30'></img>
			</div>
			{/* <PrivateRoute roleList={['ADMINISTRADOR']}> */}
			<div>
				Datos Usuarios:
				<table className='tabla'>
					<thead>
						<tr>
							<th>Cedula</th>
							<th>Nombres</th>
							<th>Apellidos</th>
							<th>Correo</th>
							<th>Tipo de Usuario</th>
							<th>Estado</th>
							<th>Editar</th>
						</tr>
					</thead>
					<tbody>
						{data && data.Usuarios ? (
							<>
								{data.Usuarios.map((u) => {
									return (
										<tr key={u._id}>
											<td>{u.cedula}</td>
											<td>{u.nombres}</td>
											<td>{u.apellidos}</td>
											<td>{u.correo}</td>
											<td>{Enum_Tusuario[u.tusuario]}</td>
											<td>{Enum_EstadoUsuario[u.estado]}</td>
											<td>
												<Link to={`/usuarios/editar/${u._id}`}>
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

export default Musuarios;