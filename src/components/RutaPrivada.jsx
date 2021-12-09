import React from 'react'
import { useUser } from '../context/userContext.js';
import noautorizado from '../media/noautorizado.jpg';

//Se crea un componente privado para proteger las rutas de todo el sistema y en caso de no cumplir el rol se le muestra una imagen de acceso no autorizado
const RutaPrivada = ({ listaRoles, children }) => {

	//Con la información del usuario logeado podemos ver si perfil dentro del contexto
	const { userData } = useUser();

	//Validamos que el perfil del usuario logeado este dentro de la lista de accesos permitidos para la ruta
	if (listaRoles.includes(userData.tusuario)) {
		return children;
	}
	//En caso de no cumplir con el rol mostramos una imagen de acceso no autorizado
	return <div className='flex flex-col items-center justify-center'><img src={noautorizado} alt='No estás autorizado para ver este sitio'/></div>;
};

export default RutaPrivada