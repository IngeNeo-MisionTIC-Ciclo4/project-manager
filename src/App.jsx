import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Usuarios from 'pages/admin/Usuarios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
	return (
		<div className='App'>
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
					</Switch>
				</Router>
		</div>
	);
}

export default App;