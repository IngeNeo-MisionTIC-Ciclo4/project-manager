import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>Crea tu cuenta</h2>
			<form className='mt-8 space-y-6'>
				<div className='grid grid-cols-2 gap-2 rounded-md shadow-sm'>
					<label htmlFor='nombre'> Nombre
					<input name='nombre' type='text' autoComplete='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu nombre'/>
					</label>
					<label htmlFor='apellido'> Apellido
						<input name='apellido' type='text' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu Apellido'/>
					</label>
					<label htmlFor='telefono'> Teléfono móvil
						<input name='telefono' type='tel' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu numero celular' />
					</label>
					<label htmlFor='correo'>Correo electrónico
						<input name='correo' type='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' />
					</label>
					<label htmlFor='contraseña'> Contraseña
						<input name='contraseña' type='password' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'/>
					</label>
					<label htmlFor='contraseña2'> Confirma tu contraseña
						<input name='contraseña2' type='password' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' />
					</label>
				</div>

				<div>
					<button type='submit'className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
						<Link to='#'>Regístrate</Link>
					</button>
				</div>

				<div className='flex items-center justify-between'>
					<span>¿Ya tienes cuenta?</span>
					<Link to='/login'>
						<span className='font-medium text-blue-600 hover:text-blue-500'>Inicia Sesión</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Registro;
