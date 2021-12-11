import React from 'react'
import { useUser } from '../context/userContext.js';

//Se crea un componente privado para proteger botones y funciones dentro del FrontEnd
const ComponentePrivado = ({listaRoles, children}) => {
	const { userData } = useUser();

	if (listaRoles.includes(userData.tusuario)){
		return children;
	}

	return <> </>;
};

export default ComponentePrivado