import ComponentePrivado from './ComponentePrivado';
import Logoproyecto from './Logoproyecto';
import useActiveRoute from 'hooks/useActiveRoute';
import { Link } from 'react-router-dom';
import React from 'react'

const navbar = () => {
	return (
		<nav className='flex justify-between w-full px-5 pt-2 bg-gray-700 navbar menu'>
			<div>
				<Link to='/'>
					<Logoproyecto />
				</Link>
			</div>
			<div>
				<ul className='inline-flex w-full pt-4 space-x-10 nav'>
					<li>
						<Link to='#'>
							<i className="text-2xl text-white fas fa-book"> Proyectos</i>
						</Link>
						<ul className="ml-5">
							<Link to='/admin/proyecto'>
								<i className="px-2 pt-5 text-2xl text-white far fa-bookmark"> Crear Proyecto</i>
							</Link>
							<Link to='/admin/perfil'>
								<i className="px-2 pt-5 pb-2 text-2xl text-white far fa-bookmark rounded-b-md"> Listar Proyectos</i>
							</Link>
						</ul>
					</li>
					<Link to='/admin/iscripciones'>
						<i className="text-2xl text-white fas fa-project-diagram"> Inscripciones</i>
					</Link>
					<Link to='/admin/usuarios'>
						<i className="text-2xl text-white fas fa-users"> Usuarios</i>
					</Link>
					<Link to='/admin/avances'>
						<i className="text-2xl text-white fas fa-tasks"> Avances</i>
					</Link>
					<Link to='/admin/usuarios'>
						<i className="text-2xl text-white fas fa-user-shield"> Perfil</i>
					</Link>
					<Link to=''>
						<i className='text-2xl text-white fas fa-sign-out-alt'> Cerrar Sesión  </i>
					</Link>
				</ul>
			</div >
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