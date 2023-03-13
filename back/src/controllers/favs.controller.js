let fav = require('../util/fav');

const getFavoriteCharacters = (req, res) => {
	const characters = fav.map(character => {
		const { id, name, image } = character;
		return { id, name, image };
	});
	res.status(200).send(characters);
};

const addFavoriteCharacter = (req, res) => {
	const character = req.body;
	if (fav.includes(character)) {
		res.status(400).json({ error: 'El personaje ya está agregado a favoritos' });
		return;
	}
	fav = [...fav, character];
	res.status(201).send(character);
}

const deleteFavoriteCharacterById = (req, res) => {
	const id = parseInt(req.params.id);
	const index = fav.findIndex(character => character.id === id);

	if (index === -1) {
		res.status(404).send({ error: 'El personaje no fue encontrado' });
	}
	fav = fav.filter(character => character.id !== id);
	res.status(200).send(fav);
}

module.exports = { 
	getFavoriteCharacters,
	addFavoriteCharacter,
	deleteFavoriteCharacterById
};