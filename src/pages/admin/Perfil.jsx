import React from "react";
import Banner from "../../media/banner-perfil.png";

const Perfil = () => {
		return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
						<div>
				<img src={Banner} alt="Perfil" className='w-full mb-10 h-30'></img>
			</div>
			<form className="flex flex-col w-1/5">
				<label className="flex flex-col py-1" htmlFor="tdocumento">
					<label className="mx-2 font-semibold">
										Tipo de Documento
										</label>
					<select className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner" required>
						<option disabled value={0}>Seleccione una opción</option>
						<option>Cédula de Ciudadanía</option>
						<option>Cédula de Extranjería</option>
						<option>Pasaporte</option>
					</select>
				</label>
				<label className="flex flex-col" htmlFor="ndocumento">
										<label className="mx-2 font-semibold">
										Número de Documento
										</label>
					<input name="ndocumento" type="number" className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="name">
										<label className="mx-2 font-semibold">
										Nombre Completo
										</label>
					<input name="name" type="text" className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="celular">
										<label className="mx-2 font-semibold">
										Celular
										</label>
					<input name="celular" type="number" className="p-2 m-2 bg-white border-2 border-t-4 border-gray-300 rounded-md shadow-inner" />
				</label>
				<button
					type='submit'
					className='col-span-2 p-2 m-3 mx-10 my-10 font-bold text-white bg-red-600 rounded-md shadow-lg'
				>
					Actualizar
				</button>
			</form>
		</div>
	)
};

export default Perfil;