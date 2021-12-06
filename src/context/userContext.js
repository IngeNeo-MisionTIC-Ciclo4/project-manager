import { createContext, useContext } from "react";

//Creamos un Contexto para poder tener disponible la informacion del suario logeado a través de toda la aplicación
export const UserContext = createContext(null);

export const useUser = () => {

	return useContext(UserContext);

}