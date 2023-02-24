export default function SearchBar(props) {
	const { onSearch } = props;

	const handleSearch = (e) => {
		e.preventDefault();
		const characterId = e.target.search.value;
		onSearch(characterId);
	}

	return (
		<form onSubmit={ handleSearch }>
		    <input type='text' name='search' />
		    <button type='submit'>Agregar</button>
		</form>
	);
}