const axios = require('axios');

const getCharacterById = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${ id }`);
		const { name, gender, species, image } = response.data;
		const character = { id, name, gender, species, image };
		res.status(200).send(character);
	} catch(err) {
		res.status(500).send(err.message);
	}
};

module.exports = getCharacterById;