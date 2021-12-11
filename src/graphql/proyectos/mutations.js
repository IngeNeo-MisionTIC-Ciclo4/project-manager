import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`
mutation CrearProyecto($campos: camposProyecto!, $objetivos: [crearObjetivo]) {
	crearProyecto(campos: $campos, objetivos: $objetivos) {
		_id
	}
}`;

const EDITAR_PROYECTO = gql`
  mutation Mutation($_id: String!, $campos: camposProyecto!) {
    editarProyecto(_id: $_id, campos: $campos) {
      _id
      estado
    }
  }
`;






export { CREAR_PROYECTO, EDITAR_PROYECTO }