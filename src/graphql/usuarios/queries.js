import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query TipoUsuario($tusuario: Enum_Tusuario!) {
	TipoUsuario(tusuario: $tusuario) {
		_id
		nombres
		apellidos
		correo
		tusuario
	}
}`;

export { GET_USUARIOS }