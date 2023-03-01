import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addCharacter, removeCharacter } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = (props) => {
	const { id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites } = props;

	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			deleteFavorite(id);
		} else {
			setIsFav(true);
			addFavorite(props);
		}
	}

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites, id]);

	return (
		<div className={ styles.card }>
		    {
		    	isFav ? (
		    		<img src='red-heart.png' alt='red-heart' onClick={ handleFavorite } className={ styles.card__button_favorite } />
		    	) : (
		    	    <img src='white-heart.png' alt='white-heart' onClick={ handleFavorite } className={ styles.card__button_favorite } />
		    	)
		    }
		    <button onClick={ onClose } className={ styles.card__button }>X</button>
		    <div className={ styles.card__name }>{ name }</div>
		    <Link to={ `/detail/${ id }` }>
		        <img src={ image } alt={ name } className={ styles.card__image} />
		    </Link>
		    <div className={ styles.card__speciesGender }>
		        <div className={ styles.card__species }>Species: { species }</div>
		        <div className={ styles.card__gender }>Gender: { gender }</div>
		    </div>
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
		addFavorite: (character) => dispatch(addCharacter(character)),
		deleteFavorite: (id) => dispatch(removeCharacter(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);