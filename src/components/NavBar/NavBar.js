import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
	const { onSearch } = props;

	return (
		<div className={ styles.navBarContainer }>
			<div className={ styles.navBar__buttons }>
			    <NavLink to='/home'>
			        <button className={ styles.navBar__button }>Home</button>
			    </NavLink>
			    <NavLink to='/about'>
			        <button className={ styles.navBar__button }>About</button>
			    </NavLink>
			</div>
		    <SearchBar  onSearch={ onSearch } />
		</div>
	);
}