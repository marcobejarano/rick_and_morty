import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export default function NavBar(props) {
	const { onSearch } = props;

	return (
		<div className={ styles.navBarContainer }>
		    <SearchBar  onSearch={ onSearch } />
		</div>
	);
}