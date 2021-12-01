import React from "react";

const MisProyectos = () => {
    return (
        <div className="flex flex-col items-center min-h-screen px-4 py-2 bg-white sm:px-6 lg:px-8 ">
            <h2 className="py-10 mt-6 text-4xl font-bold text-center text-red-600">
				Mis Proyectos
			</h2>
            <table className="border-black border-2">
					<thead className="bg-red-600 text-white">
						<tr>
							<th className="border-black border-2 p-4">ID</th>
							<th className="border-black border-2 p-4">Nombre</th>
							<th className="border-black border-2 p-4">Objetivos Generales</th>
							<th className="border-black border-2 p-4">Objetivos Específicos</th>
							<th className="border-black border-2 p-4">Presupuesto</th>
							<th className="border-black border-2 p-4">Fecha de Inicio</th>
							<th className="border-black border-2 p-4">Fecha de Fin</th>
							<th className="border-black border-2 p-4">Líder</th>
                            <th className="border-black border-2 p-4">Documento</th>
							<th className="border-black border-2 p-4">Estado</th>
							<th className="border-black border-2 p-4">Fase</th>
							<th className="border-black border-2 p-4">Avances</th>
						</tr>
					</thead>
                        <tr>
                            <th className="font-normal border-black border-2 p-4">1</th>
							<th className="font-normal border-black border-2 p-4">Alfa</th>
							<th className="font-normal border-black border-2 p-4">• Conquistar el planeta Marte</th>
							<th className="font-normal border-black border-2 p-4">• Gastar menos de 4000 lt de combustible</th>
							<th className="font-normal border-black border-2 p-4">$ 70.000.000</th>
							<th className="font-normal border-black border-2 p-4">23/01/2022</th>
							<th className="font-normal border-black border-2 p-4">23/02/2022</th>
							<th className="font-normal border-black border-2 p-4">Elon Musk</th>
                            <th className="font-normal border-black border-2 p-4">15.258.369</th>
							<th className="font-normal border-black border-2 p-4">Inactivo</th>
							<th className="font-normal border-black border-2 p-4">En Desarrollo</th>
							<th className="">
                                <button
                                type='submit'
                                className='col-span-2 m-2 p-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'
                                >
                                Registrar
                                </button>
                                <button
                                type='submit'
                                className='col-span-2 m-2 p-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'
                                >
                                Ver
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal border-black border-2 p-4">2</th>
							<th className="font-normal border-black border-2 p-4">Beta</th>
							<th className="font-normal border-black border-2 p-4">• Producir 12000 Kvh de energía a partir de fuentes renovables</th>
							<th className="font-normal border-black border-2 p-4">• Invertir en paneles solares</th>
							<th className="font-normal border-black border-2 p-4">$ 42.000.000</th>
							<th className="font-normal border-black border-2 p-4">18/06/2022</th>
							<th className="font-normal border-black border-2 p-4">23/08/2025</th>
							<th className="font-normal border-black border-2 p-4">Donald Trump</th>
                            <th className="font-normal border-black border-2 p-4">41.258.369</th>
							<th className="font-normal border-black border-2 p-4">Inactivo</th>
							<th className="font-normal border-black border-2 p-4">En Desarrollo</th>
							<th className="items-end justify-end">
                                <button
                                type='submit'
                                className='col-span-2 m-2 p-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'
                                >
                                Registrar
                                </button>
                                <button
                                type='submit'
                                className='col-span-2 m-2 p-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'
                                >
                                Ver
                                </button>
                            </th>
                        </tr>
            </table>
        </div>
    )
}

export default MisProyectos;