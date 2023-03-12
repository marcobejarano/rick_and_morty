import axios from 'axios';

export const addCharacter = (character) => {
	return (dispatch) => {
		axios.post('http://localhost:3001/api/rickandmorty/fav', character)
		    .then(response => {
		    	dispatch({
		    		type: 'ADD_CHARACTER',
		            payload: response.data
		    	});
		    })
		    .catch(error => {
		    	console.log(error);
		    });
	};
};

export const removeCharacter = (id) => {
	return (dispatch) => {
		axios.delete(`http://localhost:3001/api/rickandmorty/fav/${ id }`)
		    .then(response => {
		    	dispatch({
		    		type: 'REMOVE_CHARACTER',
					payload: id
		    	})
		    })
		    .catch(error => {
		    	console.log(error);
		    });
	};
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