import ComponentePrivado from './ComponentePrivado';
import Logoproyecto from './Logoproyecto';
import useActiveRoute from 'hooks/useActiveRoute';
import { Link } from 'react-router-dom';
import React from 'react'

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
							<Link to='/admin/proyecto'>
								<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Crear Proyecto</i>
							</Link>
							<Link to='/admin/misproyectos'>
								<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Listar Proyectos</i>
							</Link>
							<Link to='/admin/mproyectos'>
								<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Administrar Proyectos</i>
							</Link>
						</ul>
					</li>
					<Link to='/admin/inscripciones'>
						<i className="px-4 text-lg not-italic font-medium text-white">Inscripciones</i>
					</Link>
					<li>
						<Link to='#'>
							<i className="px-4 text-lg not-italic font-medium text-white">Usuarios</i>
						</Link>
						<ul className="ml-5">
							<Link to='/admin/usuarios'>
								<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Crear Usuario</i>
							</Link>
							<Link to='/admin/Musuarios'>
								<i className="px-4 pt-1 pb-1 text-lg not-italic font-medium text-white bg-yellow-600">Listar Usuarios</i>
							</Link>
						</ul>
					</li>
					<Link to='/admin/mavances'>
						<i className="px-4 text-lg not-italic font-medium text-white">Avances</i>
					</Link>
					<Link to='/admin/perfil'>
						<i className="px-4 text-lg not-italic font-medium text-white">Perfil</i>
					</Link>
					<Link to=''>
						<i className='px-4 text-lg not-italic font-medium text-white'>Cerrar Sesión  </i>
					</Link>
				</ul>
			</div>
		</nav>
	)
}

const Ruta = ({ icono, ruta, nombre, usuario }) => {
	const isActive = useActiveRoute(ruta);
	return (
		<Link to={ruta}>
			<button
				className={`flex w-full p-4 my-2 bg-${isActive ? 'purple' : 'gray'}-900 hover:bg-purple-600 justify-items-stretch text-white rounded-md border-red-900 solid`}>

				{usuario ? (
					<>
						<img src={usuario.picture} className='w-5 h-5 mx-2 rounded-full' alt='perfil' />
						{usuario.name}
					</>
				) : (
					<>
						<i className={`${icono} w-10`} />
						{nombre}
					</>
				)}
			</button>
		</Link>
	);
};

export default navbar