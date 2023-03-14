import axios from 'axios';

export const getCharacters = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:3001/api/rickandmorty/fav');
			dispatch({
				type: 'GET_CHARACTERS',
				payload: response.data
			});
		} catch(err) {
			console.log(err);
		}
	}
}

export const addCharacter = (character) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/rickandmorty/fav', character);
			dispatch({
				type: 'ADD_CHARACTER',
		        payload: response.data
			});
		} catch(err) {
			console.log(err);
		}
	}
};

export const removeCharacter = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`http://localhost:3001/api/rickandmorty/fav/${ id }`);
			dispatch({
		    	type: 'REMOVE_CHARACTER',
				payload: id
		    });
		} catch(err) {
			console.log(err);
		}
	}
};

export const filterCards = (status) => {
	return {
		type: 'FILTER',
		payload: status
	};
};

export const orderCards = (id) => {
	return {
		type: 'ORDER',
		payload: id
	};
};