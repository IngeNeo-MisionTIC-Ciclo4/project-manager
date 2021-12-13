import { gql } from'@apollo/client'

const GET_AVANCES = gql`
	query Avances {
		Avances {
			_id
			proyecto {
				nombreproyecto
			}
			descripcion
			observaciones
			creadoPorEstudiante {
				_id
				correo
			}
		}
}
`; export { GET_AVANCES }