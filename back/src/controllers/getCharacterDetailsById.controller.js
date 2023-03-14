const axios = require('axios');

const getCharacterDetailsById = async (req, res) => {
	try {
		const detailId = parseInt(req.params.detailId);
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${ detailId }`);
		const { name, gender, species, status, image, origin } = data;
		const character = { name, gender, species, status, image, origin };
		res.status(200).send(character);
	} catch(err) {
		res.status(500).send(err.message);
	}
};

module.exports = getCharacterDetailsById;