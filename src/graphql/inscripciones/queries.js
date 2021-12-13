import { gql } from'@apollo/client'

const GET_INSCRIPCIONESLIDER = gql`
	query InscripcionesAll {
		InscripcionesAll {
			_id
			estado
			fechaIngreso
			proyecto {
				_id
				nombreproyecto
			}
			estudiante {
				cedula
			}
		}
}
`;


const GET_INSCRIPCION = gql`
	query Inscripcion($id: String!) {
		Inscripcion(_id: $id) {
			_id
			estado
			fechaIngreso
			fechaEgreso
    proyecto {
				nombreproyecto
			}
    estudiante {
				cedula
			}
		}
	}
`;

export { GET_INSCRIPCIONESLIDER, GET_INSCRIPCION }