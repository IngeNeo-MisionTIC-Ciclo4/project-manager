import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`
	mutation CrearProyecto(
		$nombreproyecto: String!
		$presupuesto: Float!
		$lider: String!
		$objetivos: [crearObjetivo]
	) {
		crearProyecto(
			nombreproyecto: $nombreproyecto
			presupuesto: $presupuesto
			lider: $lider
			objetivos: $objetivos
		) {
			_id
		}
	}
`;

const EDITAR_PROYECTO = gql`
	mutation Mutation($_id: String!, $campos: camposProyecto!) {
		editarProyecto(_id: $_id, campos: $campos) {
			_id
			estado
		}
	}
`;

export { CREAR_PROYECTO, EDITAR_PROYECTO };
