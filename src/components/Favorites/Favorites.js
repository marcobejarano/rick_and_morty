import styles from './Favorites.module.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = (props) => {
	console.log(props);
	const { myFavorites } = props;
	const dispatch = useDispatch();

	const handleOrderChange = (e) => {
		dispatch(orderCards(e.target.value));
	}

	const handleFilterChange = (e) => {
		dispatch(filterCards(e.target.value));
	};

	return (
		<div className={ styles.favorites__container }>
		    <div className={ styles.favorites__selects }>
		        <select onChange={ handleOrderChange } className={ styles.favorites__select }>
		            <option value='Ascendente'>Ascendente</option>
		            <option value='Descendente'>Descendente</option>
		        </select>
		        <select onChange={ handleFilterChange } className={ styles.favorites__select }>
		            <option value='Male'>Male</option>
		            <option value='Female'>Female</option>
		            <option value='Genderless'>Genderless</option>
		            <option value='unknown'>Unknown</option>
		        </select>
		    </div>
		    <div className={ styles.favorites__list }>
			    { myFavorites.map(myFavorite => (
			    	<div key={ myFavorite.id } className={ styles.favorite__container }>
			    	    <img src={ myFavorite.image } alt={ myFavorite.name } className={ styles.favorite__image } />
			    	    <div className={ styles.favorite__name }>{ myFavorite.name }</div>
			    	</div>
			    ))}
		    </div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites
	};
};

export default connect(mapStateToProps)(Favorites);