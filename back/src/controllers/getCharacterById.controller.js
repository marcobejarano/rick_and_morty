const axios = require('axios');

const getCharacterById = (req, res) => {
	const id = parseInt(req.params.id);
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

	    	res.status(200).send(character);
	    })
	    .catch(err => {
	    	res.status(500).send(err.message);
	    });
};

module.exports = getCharacterById;