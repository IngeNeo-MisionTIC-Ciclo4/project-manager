import React from "react";

const Perfil = () => {
    return (
		<div className="flex flex-col items-center min-h-screen px-4 py-2 bg-white sm:px-6 lg:px-8 ">
			<h2 className="py-10 mt-6 text-4xl font-bold text-center text-red-600">
				Mi Perfil
			</h2>
			{/* <div cl>
				<img src={userData.picture} alt='foto' className='my-4 rounded-full w-30 h-30' />
			</div> */}
			<form className="flex flex-col w-1/5">
				<label className="py-1 flex flex-col" htmlFor="tdocumento">
					<label className="mx-2 font-semibold">
                    Tipo de Documento
                    </label>
					<select className="p-2 m-2 bg-white border-2 border-gray-300 border-t-4 rounded-md shadow-inner" required>
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
					<input name="ndocumento" type="number" className="p-2 m-2 bg-white border-2 border-gray-300 border-t-4 rounded-md shadow-inner" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="name">
                    <label className="mx-2 font-semibold">
                    Nombre Completo
                    </label>
					<input name="name" type="text" className="p-2 m-2 bg-white border-2 border-gray-300 border-t-4 rounded-md shadow-inner" required="true" />
				</label>
				<label className="flex flex-col" htmlFor="celular">
                    <label className="mx-2 font-semibold">
                    Celular
                    </label>
					<input name="celular" type="number" className="p-2 m-2 bg-white border-2 border-gray-300 border-t-4 rounded-md shadow-inner" />
				</label>
				<button
					type='submit'
					className='col-span-2 my-10 mx-10 p-2 m-3 font-bold text-white bg-red-600 rounded-md shadow-lg'
				>
					Actualizar
				</button>
			</form>
		</div>
	)
};

export default Perfil;