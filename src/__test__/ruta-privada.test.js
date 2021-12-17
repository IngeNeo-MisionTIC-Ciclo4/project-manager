import React from 'react';
import RutaPrivada from 'components/RutaPrivada';
import { render, screen, cleanup } from '@testing-library/react';
import { UserContext } from 'context/userContext';

afterEach(cleanup);

it('Renderiza si no esta autorizados o no se encuentran en la lista de roles', () => {
	render(
		<UserContext.Provider value={{ userData: { tusuario: 'Lider' } }}>
			<RutaPrivada listaRoles={['Administrador']}>
				<div>Este es el children</div>
			</RutaPrivada>
		</UserContext.Provider>
	);
	expect(screen.getByTestId('noAutorizado')).toHaveTextContent('No estás autorizado para ver este sitio.');
});

/* it('Renderiza cuando coinciden en rol enviado con la lista esperada', () => {
	render(
		<UserContext.Provider value={{ userData: { tusuario: 'Administrador' } }}>
			<RutaPrivada listaRoles={['Administrador']}>
				<div data-testid='siAutorizado'>Este es el children</div>
			</RutaPrivada>
		</UserContext.Provider>
	);
	expect(screen.getByTestId('siAutorizado')).toBeInTheDocument();
}); */