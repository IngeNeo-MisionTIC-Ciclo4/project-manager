import React, { useState, useEffect } from 'react';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Usuarios from 'pages/admin/Usuarios';
import Proyecto from 'pages/admin/Proyecto';
import Perfil from 'pages/admin/Perfil';
import MisProyectos from 'pages/admin/MisProyectos';
import Mproyectos from 'pages/admin/Mproyectos';
import Mavances from 'pages/admin/Mavances';
import Minscripciones from 'pages/admin/Minscripciones';
import Musuarios from 'pages/admin/Musuarios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import 'styles/styles.css';
import AdminLayout from './Layouts/admin';
import { UserContext } from './context/userContext.js';
import { setContext } from '@apollo/client/link/context';
import { AuthContext } from './context/authContext.js';
import jwt_decode from 'jwt-decode';


const httpLink = createHttpLink({
	uri: 'http://localhost:5050/graphQL/',
});

const authLink = setContext((_, { headers }) => {
	// Obtiene el token del local strorage si existe
	const token = JSON.parse(localStorage.getItem('token'));
	// retorna en los headers la información en Contexto para poder usarla
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

function App() {
	const [userData, setUserData] = useState({});
	const [authToken, setAuthToken] = useState('');

	const setToken = (token) => {
		console.log('set token', token);
		setAuthToken(token);
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
		} else {
			localStorage.removeItem('token');
		}
	};

	useEffect(() => {
		if (authToken) {
			const decoded = jwt_decode(authToken);
			setUserData({
				_id: decoded._id,
				cedula: decoded.cedula,
				nombres: decoded.nombres,
				apellidos: decoded.apellidos,
				correo: decoded.correo,
				tusuario: decoded.tusuario,
			});
		}
	}, [authToken]);

	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
					<UserContext.Provider value={{ userData, setUserData }}>
						<BrowserRouter>
							<Routes>
								<Route path='/login' element={<Login />} />
								<Route path='/registro' element={<Registro />} />
								<Route path='/perfil' element={<Perfil />} />
								<Route path='/admin/usuarios' element={<Usuarios />} />
									<Route path='/admin/proyecto' element={<Proyecto />} />
									<Route path='/admin/mproyectos' element={<Mproyectos />} />
									<Route path='/admin/misproyectos' element={<MisProyectos />} />
									<Route path='/admin/musuarios' element={<Musuarios />} />
									<Route path='/admin/mavances' element={<Mavances />} />
									<Route path='/admin/minscripciones' element={<Minscripciones/>} />
								</Routes>
						</BrowserRouter>
					</UserContext.Provider>
				</AuthContext.Provider>
			</ApolloProvider>
		</div>
	);
}

export default App;