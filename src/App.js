import './global.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data';

export default function App() {
	const onClose = () => {
		window.alert('Emulamos que se cierra la card');
	};

	const onSearch = (characterId) => {
		window.alert(characterId);
	};
 
	return (
		<div className='App' style={{ padding: '25px' }}>
	        <Card 
	            name={ Rick.name } 
	            species={ Rick.species }
	            gender={ Rick.gender }
	            image={ Rick.image }
	            onClose={ onClose } />
		    <hr />
	        <Cards characters={ characters } onClose={ onClose } />
		    <hr />
		    <SearchBar onSearch={ onSearch } />
		</div>
	);
}