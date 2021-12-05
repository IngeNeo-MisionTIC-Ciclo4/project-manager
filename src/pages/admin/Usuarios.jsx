import React from 'react';
import { Link } from 'react-router-dom';

const Usuarios = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'> Usuarios</h2>
			<form className='mt-8 space-y-6'>
				<div className='gap-2 rounded-md shadow-sm '>
					<label htmlFor='cedula'> Cedula
					<input name='cedula' type='text' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Cedula'/>
					</label>
					<label htmlFor='nombre'> Nombre
					<input name='nombre' type='text' autoComplete='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre'/>
					</label>
					<label htmlFor='apellido'> Apellido
						<input name='apellido' type='text' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Apellido'/>
					</label>
					<label htmlFor='correo'> Correo electrónico
						<input name='correo' type='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' />
					</label>
					<label htmlFor='rol'> Rol
						<input name='rol' type='text' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Rol'/>
					</label>
					<label htmlFor="estado" className="flex flex-col"> Estado del usuario
                    	<select name="estado"
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            required
                            defaultValue={0}>
                        	<option>Pendiente</option>
                        	<option>Autorizado</option>
							<option>No Autorizado</option>
                    	</select>
                	</label>
					<button type='submit' className='py-4 mt-6 text-white bg-green-400 rounded-full shadow-md hover:bg-green-600'>
                    	Guardar Usuario
                	</button>
				</div>
			</form>
		</div>
	);
};

export default Usuarios;
