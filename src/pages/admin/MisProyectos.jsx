import React from "react";
import Banner from "../../media/banner-misproyectos.png";


const MisProyectos = () => {
	return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
						<div>
				<img src={Banner} alt="MisProyectos" className='w-full mb-10 h-30'></img>
			</div>
			<table className="border-2 border-black">
				<thead className="text-white theadcolor">
					<tr>
						<th className="p-4 border-2 border-black">ID</th>
						<th className="p-4 border-2 border-black">Nombre</th>
						<th className="p-4 border-2 border-black">Objetivos Generales</th>
						<th className="p-4 border-2 border-black">Objetivos Específicos</th>
						<th className="p-4 border-2 border-black">Presupuesto</th>
						<th className="p-4 border-2 border-black">Fecha de Inicio</th>
						<th className="p-4 border-2 border-black">Fecha de Fin</th>
						<th className="p-4 border-2 border-black">Líder</th>
						<th className="p-4 border-2 border-black">Documento</th>
						<th className="p-4 border-2 border-black">Estado</th>
						<th className="p-4 border-2 border-black">Fase</th>
						<th className="p-4 border-2 border-black">Avances</th>
					</tr>
				</thead>
				<tr>
					<th className="p-4 font-normal border-2 border-black">1</th>
					<th className="p-4 font-normal border-2 border-black">Alfa</th>
					<th className="p-4 font-normal border-2 border-black">• Conquistar el planeta Marte</th>
					<th className="p-4 font-normal border-2 border-black">• Gastar menos de 4000 lt de combustible</th>
					<th className="p-4 font-normal border-2 border-black">$ 70.000.000</th>
					<th className="p-4 font-normal border-2 border-black">23/01/2022</th>
					<th className="p-4 font-normal border-2 border-black">23/02/2022</th>
					<th className="p-4 font-normal border-2 border-black">Elon Musk</th>
					<th className="p-4 font-normal border-2 border-black">15.258.369</th>
					<th className="p-4 font-normal border-2 border-black">Inactivo</th>
					<th className="p-4 font-normal border-2 border-black">En Desarrollo</th>
					<th className="">
						<button type='submit'
							className='col-span-2 p-2 m-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'>Registrar
						</button>
						<button type='submit'
							className='col-span-2 p-2 m-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow'> Ver
						</button>
					</th>
				</tr>
				<tr>
					<th className="p-4 font-normal border-2 border-black">2</th>
					<th className="p-4 font-normal border-2 border-black">Beta</th>
					<th className="p-4 font-normal border-2 border-black">• Producir 12000 Kvh de energía a partir de fuentes renovables</th>
					<th className="p-4 font-normal border-2 border-black">• Invertir en paneles solares</th>
					<th className="p-4 font-normal border-2 border-black">$ 42.000.000</th>
					<th className="p-4 font-normal border-2 border-black">18/06/2022</th>
					<th className="p-4 font-normal border-2 border-black">23/08/2025</th>
					<th className="p-4 font-normal border-2 border-black">Donald Trump</th>
					<th className="p-4 font-normal border-2 border-black">41.258.369</th>
					<th className="p-4 font-normal border-2 border-black">Inactivo</th>
					<th className="p-4 font-normal border-2 border-black">En Desarrollo</th>
					<th className="items-end justify-end">
						<button type='submit'
							className='col-span-2 p-2 m-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow' > Registrar
						</button>
						<button type='submit'
							className='col-span-2 p-2 m-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow' > Ver
						</button>
					</th>
				</tr>
			</table>
		</div>
	)
}

export default MisProyectos;