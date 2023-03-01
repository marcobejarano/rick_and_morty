import styles from './Favorites.module.css';
import { connect } from 'react-redux';

const Favorites = (props) => {
	const { myFavorites } = props;

	return (
		<div className={ styles.favorites__container }>
		    { myFavorites.map(myFavorite => (
		    	<div key={ myFavorite.id } className={ styles.favorite__container }>
		    	    <img src={ myFavorite.image } alt={ myFavorite.name } className={ styles.favorite__image } />
		    	    <div className={ styles.favorite__name }>{ myFavorite.name }</div>
		    	</div>
		    ))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites
	};
};

export default connect(mapStateToProps)(Favorites);