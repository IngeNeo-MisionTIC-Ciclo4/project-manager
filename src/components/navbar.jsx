import React from 'react'
import ComponentePrivado from './ComponentePrivado';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';

const navbar = () => {
	return (
		<nav className='flex justify-center w-full px-5 bg-yellow-600 navbar menu'>
			<div>
				<ul className='inline-flex w-full pt-4 pb-4 justify-content-center nav'>
					<li>
						<Link to='#'>
							<i className="px-4 text-lg not-italic font-medium text-white">Proyectos</i>
						</Link>
						<ul className="ml-5">
							<ComponentePrivado listaRoles={['Administrador', 'Lider']}>
								<Link to='/admin/proyecto'>
									<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Crear Proyecto</i>
								</Link>
							</ComponentePrivado>
							<ComponentePrivado listaRoles={['Administrador', 'Lider', 'Estudiante']}>
								<Link to='/admin/misproyectos'>
									<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Mis Proyectos</i>
								</Link>
							</ComponentePrivado>
							<ComponentePrivado listaRoles={['Administrador', 'Lider', 'Estudiante']}>
								<Link to='/admin/mproyectos'>
									<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Administrar Proyectos</i>
								</Link>
							</ComponentePrivado>
						</ul>
					</li>
					<ComponentePrivado listaRoles={['Administrador', 'Lider', 'Estudiante']}>
						<Link to='/admin/minscripciones'>
							<i className="px-4 text-lg not-italic font-medium text-white">Inscripciones</i>
						</Link>
					</ComponentePrivado>
					<li>
						<ComponentePrivado listaRoles={['Administrador', 'Lider']}>
							<Link to='#'>
								<i className="px-4 text-lg not-italic font-medium text-white">Usuarios</i>
							</Link>
							<ul className="ml-5">
								<Link to='/admin/usuarios'>
									<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Crear Usuario</i>
								</Link>
								<Link to='/admin/musuarios'>
									<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Administrar Usuarios</i>
								</Link>
							</ul>
						</ComponentePrivado>
					</li>
					<ComponentePrivado listaRoles={['Administrador', 'Lider', 'Estudiante']}>
						<Link to='/admin/mavances'>
							<i className="px-4 text-lg not-italic font-medium text-white">Avances</i>
						</Link>
					</ComponentePrivado>
					<ComponentePrivado listaRoles={['Administrador', 'Lider', 'Estudiante']}>
						<Link to='/perfil'>
							<i className="px-4 text-lg not-italic font-medium text-white">Perfil</i>
						</Link>
					</ComponentePrivado>
					<Logout/>
				{/* 	<Link to=''>
						<i className='px-4 text-lg not-italic font-medium text-white'>Cerrar Sesión  </i>
					</Link> */}
				</ul>
			</div>
		</nav>
	)
}

const Logout = () => {
	const { setToken } = useAuth();
	const deleteToken = () => {
		setToken(null);
	};
	return (
		<li>
			<button type='button' onClick={() => deleteToken()}>
				<NavLink to='/login' className='sidebar-route text-red-700'>
					<div className='flex items-center'>
						<i className='px-4 text-lg not-italic font-medium text-white'> Cerrar Sesión  </i>
					</div>
				</NavLink>
			</button>
		</li>
	);
};
export default navbar