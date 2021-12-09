import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<h2 className="mt-6 text-3xl font-extrabold text-center text-blue-600"> Inicia sesión en tu cuenta </h2>
				<form className="mt-8 space-y-6">
					<input type="hidden" name="recordar" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<input name="email" type="email" autoComplete="email" required="true"
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Correo Electrónico"/>
						</div>
						<div>
							<input id="password" name="password" type="password" autoComplete="current-password" required="true"
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Contraseña" />
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="recordar" name="recordar" type="checkbox"
							className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
							<label htmlFor="recordar" className="block ml-2 text-sm text-gray-900"> {" "} Recuérdame{" "} </label>
						</div>

						<div className="text-sm">
							<Link to="#">
								<span className="font-medium text-blue-600 hover:text-blue-500"> {" "} ¿Olvidaste tu contraseña?{" "} </span>
							</Link>
						</div>
					</div>
					<div>
						<button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
							<Link to="#">Inicia sesión</Link>
						</button>
					</div>

					<div className="flex items-center justify-between">
						<span>¿No tienes cuenta?</span>
						<Link to='/registro'>
							<span className="font-medium text-blue-600 hover:text-blue-500"> Regístrate </span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;