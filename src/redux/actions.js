export const addCharacter = (character) => {
	return {
		type: 'ADD_CHARACTER',
		payload: character
	};
};

export const removeCharacter = (id) => {
	return {
		type: 'REMOVE_CHARACTER',
		payload: id
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