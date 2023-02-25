import styles from './SearchBar.module.css';

export default function SearchBar(props) {
	const { onSearch } = props;

	const handleSearch = (e) => {
		e.preventDefault();
		const characterId = e.target.search.value;
		onSearch(characterId);
	}

	return (
		<form onSubmit={ handleSearch } className={ styles.searchBarContainer }>
		    <input type='text' name='search' className={ styles.searchBarContainer__input } />
		    <button type='submit' className={ styles.searchBarContainer__button }>Agregar</button>
		</form>
	);
}