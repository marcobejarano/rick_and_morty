const initialState = {
	myFavorites: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'ADD_CHARACTER':
	    	return {
	    		...state,
	    		myFavorites: [...state.myFavorites, action.payload]
	    	};
	    case 'REMOVE_CHARACTER':
	    	const list = state.myFavorites.filter(character => character.id !== action.payload);
	    	return {
	    		...state,
	    		myFavorites: list
	    	};
	    default:
	    	return state;
	}
}