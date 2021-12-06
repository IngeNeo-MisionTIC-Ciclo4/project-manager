import ComponentePrivado from './ComponentePrivado';
import Logoproyecto from './Logoproyecto';
import useActiveRoute from 'hooks/useActiveRoute';
import { Link } from 'react-router-dom';
import React from 'react'





const navbar = () => {
	return (
		<nav className='flex justify-between w-full pt-2 px-5 navbar menu bg-gray-700'>
			<div>
				<Link to='/'>
					<Logoproyecto />
				</Link>
			</div>
			<div>
				<ul className='nav inline-flex w-full space-x-10 pt-4'>
					<li>
						<Link to='#'>
							<i className="fas fa-book text-white text-2xl"> Proyectos</i>
						</Link>
						<ul className="ml-5">
							<Link to='/admin/proyecto'>
								<i className="far fa-bookmark text-white text-2xl px-2 pt-5"> Crear Proyecto</i>
							</Link>
							<Link to='/admin/perfil'>
								<i className="far fa-bookmark text-white text-2xl px-2 pb-2 pt-5 rounded-b-md"> Listar Proyectos</i>
							</Link>
						</ul>
					</li>
					<Link to='/admin/iscripciones'>
						<i className="fas fa-project-diagram text-white text-2xl"> Inscripciones</i>
					</Link>
					<Link to='/admin/usuarios'>
						<i className="fas fa-users text-white text-2xl"> Usuarios</i>
					</Link>
					<Link to='/admin/avances'>
						<i className="fas fa-tasks text-white text-2xl"> Avances</i>
					</Link>
					<Link to='/admin/usuarios'>
						<i className="fas fa-user-shield text-white text-2xl"> Perfil</i>
					</Link>
					<Link to=''>
						<i className='fas fa-sign-out-alt text-white text-2xl'> Cerrar Sesión  </i>
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
