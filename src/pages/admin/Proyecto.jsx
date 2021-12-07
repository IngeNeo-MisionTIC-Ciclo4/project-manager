import Logoproyecto from "../../media/education-icon.png";
const proyecto = () => {
		return (
		<div className="fondo flex flex-col items-center min-h-screen px-4 py-2 sm:px-6 lg:px-8">
				<h2 className="py-4 mt-6 text-3xl font-extrabold text-center text-blue-600">Creación de Proyecto</h2>
				<form className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
						<div className="grid grid-cols-3 gap-5 rounded-md text-center">
							<div></div>
							<div>
								<img src={Logoproyecto} alt="Proyecto" width="150px"></img>
							</div>
							<div className="flex flex-col">
								<button>123</button>
								<button>123</button>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-5 rounded-md">
								<label htmlFor="nombre"> Nombre proyecto
								<input name= "nombreproyecto" type="text" required="true"
											className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
											placeholder="Nombre proyecto"/>
								</label>
								<label htmlFor="presupuesto"> Presupuesto
								<input name= "presupuesto" type="number" required="true"
											className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
											placeholder="Presupuesto"/>
								</label>
						</div>
						<div className="grid grid-cols-1 rounded-md">
								<label htmlFor="nombrelider"> Nombre Lider
								<input name= "nombrelider" type="text" required="true"
											className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
											placeholder="Nombre lider"/>
								</label>
						</div>
						<div className="grid grid-cols-1 rounded-md py-4">
								<button type='submit' className='col-span-2 p-2 text-black font-bold bg-white-400 rounded-lg shadow-md hover:bg-gray-500 hover:text-white'>
								<i className="fas fa-check-circle text-green-500 text-2xl align-middle"></i> Guardar Proyecto
								</button>
						</div>
				</form>
		</div>
				);
};

export default proyecto;
