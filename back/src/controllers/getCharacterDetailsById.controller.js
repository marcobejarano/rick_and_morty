const axios = require('axios');

const getCharacterDetailsById = (req, res) => {
	const detailId = parseInt(req.params.detailId);
	axios.get(`https://rickandmortyapi.com/api/character/${ detailId }`)
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

	    	res.status(200).send(character);
	    })
	    .catch(err => {
	    	res.status(500).send(err.message);
	    });
};

module.exports = getCharacterDetailsById;