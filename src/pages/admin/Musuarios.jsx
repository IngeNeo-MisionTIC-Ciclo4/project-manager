import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Tusuario, Enum_EstadoUsuario } from 'utils/enums';
import ReactLoading from 'react-loading';
import Banner from 'media/banner-musuarios.png';

const Musuarios = () => {
	const { data, error, loading } = useQuery(GET_USUARIOS);

	useEffect(() => {
		if (error) {
			toast.error('Error consultando los usuarios');
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
				<img src={Banner} alt='Musuarios' className='w-full mb-10 h-30' />
			</div>
			{/* <PrivateRoute roleList={['ADMINISTRADOR']}> */}
			<div>
				<table className='tabla'>
					<thead>
						<tr>
							<th>Cédula</th>
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
								{data.Usuarios.map((u) => (
									<tr key={u._id}>
										<td>{u.cedula}</td>
										<td>{u.nombres}</td>
										<td>{u.apellidos}</td>
										<td>{u.correo}</td>
										<td>{Enum_Tusuario[u.tusuario]}</td>
										<td>{Enum_EstadoUsuario[u.estado]}</td>
										<td className='text-center'>
											<Link to={`/usuarios/editarusuarios/${u._id}`}>
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
			{/* 	</PrivateRoute> */}
		</div>
	);
};

export default Musuarios;
