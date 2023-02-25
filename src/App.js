import './global.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
		    <Routes>
		        <Route path='/' element={ <Navigate to="/home" /> } />
		        <Route 
		            path='/home' 
		            element={ <Cards characters={ characters } onClose={ onClose } /> }
		        />
		        <Route path='/about' element={ <About /> } />
		        <Route path='/detail/:detailId' element={ <Detail /> } />
		        <Route path='*' element={ <NotFoundPage /> } />
		    </Routes>
		</div>
	);
}