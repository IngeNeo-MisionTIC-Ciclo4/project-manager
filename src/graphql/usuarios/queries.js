import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
	query Usuarios($filtro: FiltroUsuarios) {
		Usuarios(filtro: $filtro) {
			_id
			cedula
			nombres
			apellidos
			correo
			tusuario
			estado
		}
	}
`;

const GET_USUARIO = gql`
	query Usuario($_id: String!) {
		Usuario(_id: $_id) {
			_id
			cedula
			nombres
			apellidos
			correo
			tusuario
			estado
		}
	}
`;

export { GET_USUARIOS, GET_USUARIO };
