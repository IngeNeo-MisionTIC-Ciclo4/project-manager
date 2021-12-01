const proyecto = () => {
    return (
    <div className="flex flex-col items-center min-h-screen px-4 py-2 bg-blue-50 sm:px-6 lg:px-8">
        <h2 className="py-4 mt-6 text-3xl font-extrabold text-center text-blue-600">Creación de Proyecto</h2>
        <form className="py-3 mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-2 rounded-md shadow-sm">
                <label htmlFor="id"> ID
                <input name= "id" type="id" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="id"/>
                </label>
                <label htmlFor="nombre"> Nombre
                <input name= "nombre" type="text" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="nombre"/>
                </label>
                <label htmlFor="objetivogen"> Objetivo General
                <input name= "objetivogen" type="text" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="objetivo general"/>
                </label>
                <label htmlFor="objetivosesp"> Objetivos Especificos
                <input name= "objetivosesp" type="textarea" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="objetivos especificos"/>
                </label>
                <label htmlFor="presupuesto"> Presupuesto
                <input name= "presupuesto" type="number" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="presupuesto"/>
                </label>
                <label htmlFor="fechaini"> Fecha Inicio
                <input name= "fechaini" type="date" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="fecha de inicio"/>
                </label>
                <label htmlFor="terminacionpro"> Terminacion del Proyecto
                <input name= "terminacionpro" type="date" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="terminacion del proyecto"/>
                </label>
                <label htmlFor="idlider">ID Lider
                <input name= "idlider" type="id" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="id lider"/>
                </label>
                <label htmlFor="nombrelider"> Nombre Lider
                <input name= "nombrelider" type="text" required="true"
                       className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                       placeholder="nombre lider"/>
                </label>
                <label htmlFor="estadopro" className="flex flex-col"> Estado del proyecto
                    <select name="estado" 
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            required
                            defaultValue={0}>
                        <option>Inactivo</option>
                        <option>Activo</option>
                    </select>
                </label>
                <label htmlFor="fasepro" className="flex flex-col"> Fase del proyecto
                    <select name="fasepro" 
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            required
                            defaultValue={null}>
                        <option>Iniciado</option>
                        <option>En Desarrollo</option>
                        <option>Terminado</option>
                    </select>
                </label>
                <button type='submit' className='col-span-2 p-2 text-white bg-green-400 rounded-full shadow-md hover:bg-green-600'>
                    Guardar Proyecto
                </button>
            </div>

        </form>
    </div>
        );
};

export default proyecto;
