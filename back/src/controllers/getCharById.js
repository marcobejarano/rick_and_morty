const axios = require('axios');

const getCharById = (res, id) => {
	axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { id, name, gender, species, image } = data;
	    	const character = {
	    		id,
	    		name,
	    		gender,
	    		species,
	    		image
	    	};

	    	res.writeHead(200, { 'Content-Type': 'application/json' });
	    	res.end(JSON.stringify(character));
	    })
	    .catch(err => {
	    	res.writeHead(500, { 'Content-Type': 'text/plain' });
	    	res.end(err.message);
	    });
};

module.exports = getCharById;
