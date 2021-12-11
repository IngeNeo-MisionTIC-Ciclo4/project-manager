import { gql }from '@apollo/client';

const CREAR_USUARIO = gql`
mutation CrearUsuario($cedula: String!, $nombres: String!, $apellidos: String!, $correo: String!, $tusuario: Enum_Tusuario!, $password: String!) {
	crearUsuario(cedula: $cedula, nombres: $nombres, apellidos: $apellidos, correo: $correo, tusuario: $tusuario, password: $password) {
		_id
	}
}
`;

const EDITAR_USUARIO = gql`
	mutation EditarUsuario(
		$_id: String!
		$cedula: String!
		$nombres: String!
		$apellidos: String!
		$correo: String!
		$estado: Enum_EstadoUsuario!
	) {
		editarUsuario(
			_id: $_id
			cedula: $cedula
			nombres: $nombres
			apellidos: $apellidos
			correo: $correo
			estado: $estado
		) {
			_id
			cedula
			nombres
			apellidos
			correo
			estado
			tusuario
		}
	}
`;

export { CREAR_USUARIO, EDITAR_USUARIO }