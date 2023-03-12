import './global.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { removeCharacter } from './redux/actions';
import { connect } from 'react-redux';

function App(props) {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();
	const username = 'marco@hotmail.com';
	const password = 'password12';
	const { myFavorites, deleteFavorite } = props;

	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate('/home');
		} else {
			window.alert('El nombre de usuario y/o contraseña son incorrectos')
		}
	};

	const logout = () => {
		setAccess(false);
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const onClose = (id) => {
		setCharacters(characters.filter(character => character.id !== id));

		const favorite = myFavorites.find(character => character.id === id);
		if (favorite) {
			deleteFavorite(id);
		}
	};

	const onSearch = (characterId) => {
		fetch(`http://localhost:3001/api/rickandmorty/character/${characterId}`)
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
		<div className= 'App'>
		    {
		    	location.pathname !== '/' && <NavBar onSearch={ onSearch } logout={ logout } />
		    }
		    <Routes>
		        <Route path='/' element={ <Form login={ login } /> } />
		        <Route 
		            path='/home' 
		            element={ <Cards characters={ characters } onClose={ onClose } /> }
		        />
		        <Route path='/about' element={ <About /> } />
		        <Route path='/detail/:detailId' element={ <Detail /> } />
		        <Route path='/favorites' element={ <Favorites /> } />
		        <Route path='*' element={ <NotFoundPage /> } />
		    </Routes>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteFavorite: (id) => dispatch(removeCharacter(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);