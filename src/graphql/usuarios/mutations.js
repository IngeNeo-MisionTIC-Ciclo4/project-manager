import { gql }from '@apollo/client';

const CREAR_USUARIO = gql`
mutation CrearUsuario($campos: camposUsuario!) {
	crearUsuario(campos: $campos) {
		_id
	}
}`;

export { CREAR_USUARIO }