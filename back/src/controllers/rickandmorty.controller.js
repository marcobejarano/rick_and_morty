const axios = require('axios');

let fav = [];

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

	    	res.status(200).json(character);
	    })
	    .catch(err => {
	    	res.status(404).json(err.message);
	    });
};

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

	    	res.status(200).json(character);
	    })
	    .catch(err => {
	    	res.status(404).json(err.message);
	    });
};

const getFavoriteCharacters = (req, res) => {
	const characters = fav.map(character => {
		const { id, name, image } = character;
		return { id, name, image };
	});
	res.status(200).json(characters);
};

const addFavoriteCharacter = (req, res) => {
	const character = req.body;
	if (fav.includes(character)) {
		res.status(400).json({ error: 'El personaje ya está agregado a favoritos' });
		return;
	}
	fav = [...fav, character];
	res.status(201).json(character);
}

const deleteFavoriteCharacterById = (req, res) => {
	const id = parseInt(req.params.id);
	const index = fav.findIndex(character => character.id === id);

	if (index === -1) {
		res.status(404).json({ error: 'El personaje no fue encontrado' });
	}
	fav = fav.filter(character => character.id !== id);
	res.status(200).json(fav);
}

module.exports = { 
	getCharacterById,
	getCharacterDetailsById,
	getFavoriteCharacters,
	addFavoriteCharacter,
	deleteFavoriteCharacterById
};