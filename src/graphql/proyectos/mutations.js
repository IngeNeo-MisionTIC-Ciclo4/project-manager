import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`
mutation CrearProyecto($campos: camposProyecto!, $objetivos: [crearObjetivo]) {
	crearProyecto(campos: $campos, objetivos: $objetivos) {
		_id
	}
}`;

export { CREAR_PROYECTO }