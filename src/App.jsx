import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Usuarios from 'pages/admin/Usuarios';
import Proyecto from 'pages/admin/Proyecto'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import 'styles/styles.css';

const httpLink = createHttpLink({
	uri: 'http://localhost:5050/graphQL/',
});


const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink,
});

function App() {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
			<Router>
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
					<Route path='/registro'>
						<Registro />
					</Route>
					<Route path='/usuarios'>
						<Usuarios />
					</Route>
					<Route path='/proyecto'>
						<Proyecto />
					</Route>
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;