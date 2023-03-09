const axios = require('axios');

const getCharDetail = (res, id) => {
	axios.get(`https://rickandmortyapi.com/api/character/${ id }`)
	    .then(response => response.data)
	    .then(data => {
	    	const { name, gender, species, status, image, origin } = data;
	    	const character = {
	    		name,
	    		gender,
	    		species,
	    		status,
	    		image,
	    		origin
	    	};

	    	res.writeHead(200, { 'Content-Type': 'application/json' });
	    	res.end(JSON.stringify(character));
	    })
	    .catch(err => {
	    	res.writeHead(500, { 'Content-Type': 'text/plain' });
	    	res.end(err.message);
	    });
};

module.exports = getCharDetail;