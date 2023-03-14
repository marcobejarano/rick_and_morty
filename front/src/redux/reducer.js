const initialState = {
	myFavorites: [],
	adjustableFavorites: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'ADD_CHARACTER':
	    	return {
	    		...state,
	    		myFavorites: [...state.myFavorites, action.payload],
	    		adjustableFavorites: [...state.adjustableFavorites, action.payload]
	    	};
	    case 'REMOVE_CHARACTER':
	    	const listFavorites = state.myFavorites.filter(character => character.id !== action.payload);
	    	const listAdjustableFavorites = state.adjustableFavorites.filter(character => character.id !== action.payload);
	    	return {
	    		...state,
	    		myFavorites: listFavorites,
	    		adjustableFavorites: listAdjustableFavorites
	    	};
	    case 'GET_CHARACTERS':
	    	return {
	    		...state,
	    		adjustableFavorites: action.payload
	    	}
	    case 'FILTER':
	    	const filterCopy = [...state.myFavorites];
	    	const filter = filterCopy.filter(character => (
	    		character.gender === action.payload
	    	));
	    	return {
	    		...state,
	    		adjustableFavorites: filter
	    	}
	    case 'ORDER':
	    	let orderedList = [];
	    	if (state.myFavorites === state.adjustableFavorites) {
	    		orderedList = [...state.myFavorites];
	    	} else {
	    		orderedList = [...state.adjustableFavorites];
	    	}
	    	
	    	if (action.payload === 'Ascendente') {
	    		orderedList.sort((a, b) => a.id - b.id);
	    	} else if (action.payload === 'Descendente') {
	    		orderedList.sort((a, b) => b.id - a.id);
	    	}
	    	return {
	    		...state,
	    		adjustableFavorites: orderedList
	    	}
	    default:
	    	return { ...state };
	}
}