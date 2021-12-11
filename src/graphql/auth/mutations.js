import { gql } from '@apollo/client';

const REGISTRO = gql`
	mutation Registro(
		$cedula: String!
		$nombres: String!
		$apellidos: String!
		$correo: String!
		$tusuario: Enum_Tusuario!
		$password: String!
	) {
		registro(
			cedula: $cedula
			nombres: $nombres
			apellidos: $apellidos
			correo: $correo
			tusuario: $tusuario
			password: $password
		) {
			token
			error
		}
	}
`;

const LOGIN = gql`
	mutation Login($correo: String!, $password: String!) {
		login(correo: $correo, password: $password) {
			token
			error
		}
	}
`;

const RENOVAR_TOKEN = gql`
	mutation RenovarToken {
		renovarToken {
			token
			error
		}
	}
`;

export { REGISTRO, LOGIN, RENOVAR_TOKEN };
