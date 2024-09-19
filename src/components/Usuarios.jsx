import { useEffect, useRef, useState } from "react";
import reqRes from "../api/reqRes";

function Usuarios() {
	const [usuarios, setUsuarios] = useState([]);
	const refPage = useRef(1); // Usar useRef para la página actual

	useEffect(() => {
		fnCargaUsuarios(); // Cargar los usuarios al montar el componente
	}, []);

	const fnCargaUsuarios = async () => {
		try {
			const response = await reqRes.get('/users', {
				params: {
					page: refPage.current
				}
			});

			if (response.data.data.length > 0) {
				setUsuarios(response.data.data);
				// No incrementa la página aquí; solo se incrementa al hacer clic en "Siguiente"
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSiguiente = () => {
		refPage.current += 1; // Incrementar la página en la referencia
		fnCargaUsuarios(); // Volver a cargar usuarios con la nueva página
	};

	const handleAnterior = () => {
		refPage.current -= 1; // Incrementar la página en la referencia
		fnCargaUsuarios(); // Volver a cargar usuarios con la nueva página
	};

	const renderItem = (usuario) => {
		return (
			<tr key={usuario.id.toString()}>
				<td>
					<img
						src={usuario.avatar}
						alt={usuario.first_name}
						style={{
							width: 50,
							borderRadius: 100
						}}
					/>
				</td>
				<td>
					{usuario.first_name} {usuario.last_name}
				</td>
				<td>
					{usuario.email}
				</td>
			</tr>
		);
	};

	return (
		<div className="flex flex-col max-w-md p-5">
			<h3>Usuarios</h3>
			<div className="flex flex-col">
				<table className="table">
					<thead>
						<tr>
							<th>
								Avatar
							</th>
							<th>
								Nombre
							</th>
							<th>
								email
							</th>
						</tr>
					</thead>
					<tbody>
						{
							usuarios.map(usuario => renderItem(usuario))
						}
					</tbody>
				</table>
				<div className="flex gap-2 items-center justify-center mt-5">
					<button
						onClick={handleAnterior}
						disabled={refPage.current === 1}
						className={
							`bg-blue-600 rounded-lg px-4 py-2 transition-all duration-300
							${refPage.current === 1 ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'hover:bg-blue-900'}`
						}>
						Anterior
					</button>
					<p className="font-bold mx-5">{refPage.current}</p>
					<button
						onClick={handleSiguiente}
						disabled={refPage.current === 2}
						className={
							`bg-blue-600 rounded-lg px-4 py-2 transition-all duration-300
							${refPage.current === 2 ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'hover:bg-blue-900'}`
						}>
						Siguiente
					</button>

				</div>
			</div>
		</div>
	);
}

export default Usuarios;