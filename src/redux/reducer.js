const initialState = {
	myFavorites: [],
	allCharacters: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'ADD_CHARACTER':
	    	return {
	    		...state,
	    		myFavorites: [...state.allCharacters, action.payload],
	    		allCharacters: [...state.allCharacters, action.payload]
	    	};
	    case 'REMOVE_CHARACTER':
	    	const list = state.myFavorites.filter(character => character.id !== action.payload);
	    	return {
	    		...state,
	    		myFavorites: list
	    	};
	    case 'FILTER':
	    	const filterCopy = [...state.allCharacters];
	    	const filter = filterCopy.filter(character => (
	    		character.gender === action.payload
	    	));
	    	return {
	    		...state,
	    		myFavorites: filter
	    	}
	    case 'ORDER':
	    	const orderedList = [...state.allCharacters];
	    	if (action.payload === 'Ascendente') {
	    		orderedList.sort((a, b) => a.id - b.id);
	    	} else if (action.payload === 'Descendente') {
	    		orderedList.sort((a, b) => b.id - a.id);
	    	}
	    	return {
	    		...state,
	    		myFavorites: orderedList
	    	}
	    default:
	    	return state;
	}
}