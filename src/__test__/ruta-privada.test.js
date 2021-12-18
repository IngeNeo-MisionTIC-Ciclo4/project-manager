import React from 'react';
import { UserContext } from 'context/userContext';
import RutaPrivada from 'components/RutaPrivada';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('Renderiza si no esta autorizados o no se encuentran en la lista de roles', () => {
	render(
		<UserContext.Provider value={{ userData: { tusuario: 'Estudiante' } }}>
			<RutaPrivada listaRoles={['Administrador']}>
				<div>Este es el children</div>
			</RutaPrivada>
		</UserContext.Provider>
	);
	expect(screen.getByTestId('noAutorizado')).toBeInTheDocument();
});

it('Renderiza cuando cumple todos los parametros', () => {
	render(
		<UserContext.Provider value={{ userData: { tusuario: 'Administrador' } }}>
			<RutaPrivada listaRoles={['Administrador']}>
				<div data-testid='Autorizado'>Este es el children</div>
			</RutaPrivada>
		</UserContext.Provider>
	);
	expect(screen.getByTestId('Autorizado2')).toHaveTextContent(
		'Este es el children'
	);
});
