import './global.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

export default function App() {
	const [characters, setCharacters] = useState([]);

	const onClose = (id) => {
		setCharacters(characters.filter(character => character.id !== id));
	};

	const onSearch = (characterId) => {
		fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
		    .then(res => res.json())
		    .then(data => {
		    	if (characters.some(character => character.id === data.id)) {
		    		window.alert('Ese personaje ya está agregado');
		    	} else {
		    		if (data.name) {
			    		setCharacters(oldCharacters => [...oldCharacters, data]);
			    	} else {
			    		window.alert('No hay personajes con ese Id');
			    	}
		    	}
		    })
		    .catch(err => {
		    	console.error(err);
		    	window.alert('Hubo un error al buscar el personaje');
		    });
	};
 
	return (
		<div className='App' style={{ padding: '25px' }}>
		    <NavBar onSearch={ onSearch } />
	        <Cards characters={ characters } onClose={ onClose } />
		</div>
	);
}