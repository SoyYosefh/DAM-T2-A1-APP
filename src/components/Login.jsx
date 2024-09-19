import { useReducer } from "react";

function Login() {

	// Mueve authReducer aquí
	const authReducer = (state, action) => {
		switch (action.type) {
			case 'logout':
				return {
					validando: false,
					token: null,
					username: '',
					nombre: ''
				}
			case 'login':
				return {
					validando: false,
					token: "19400678",
					username: action.payload.username,
					nombre: action.payload.nombre
				}
			case 'validando':
				return {
					...state,
					validando: true
				}
			default:
				return state;
		}
	}

	const initialState = {
		validando: false,
		token: '',
		username: '',
		nombre: '',
	}

	// Aquí se llama a useReducer después de declarar authReducer
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = () => {
		dispatch({ type: 'validando' });

		setTimeout(() => {
			dispatch({
				type: 'login',
				payload: {
					username: 'Yosefh',
					nombre: 'José Ramón'
				}
			});
		}, 2000);
	}

	const logout = () => {
		dispatch({ type: 'validando' });

		setTimeout(() => {
			dispatch({ type: 'logout' });
		}, 2000);
	}

	if (state.validando) {
		return (
			<div className="p-5">
				<h3>Login</h3>
				<div className="flex items-center gap-2">
					<div className="border-gray-300 m-5 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-500"></div>
					<span>Cargando...</span>
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-2 p-5">
			<h3>Login</h3>
			{
				(state.token)
					?
					(
						<div className="bg-green-200 text-green-700 border border-green-700 p-3 rounded-lg">
							Autenticado como:
							<span className="font-bold">{state.nombre}</span>
						</div>
					)
					:
					(
						<div className="bg-red-200 text-red-700 border border-red-700 p-3 rounded-lg">
							No Autenticado...
						</div>
					)
			}
			<div className="flex gap-2">
				{
					(state.token)
						? (
							<button
								onClick={logout}
								className=" bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-900 transition-all duration-300"
							>
								Logout
							</button>
						)
						: (
							<button
								onClick={login}
								className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-900 transition-all duration-300"
							>
								Login
							</button>
						)
				}
			</div>
		</div>
	);
}

export default Login;