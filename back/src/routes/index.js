const express = require('express');
const router = express.Router();

const {
	getCharacterById,
	getCharacterDetailsById,
	getFavoriteCharacters,
	addFavoriteCharacter,
	deleteFavoriteCharacterById
} = require('../controllers/rickandmorty.controller');

router.get('/api/rickandmorty/character/:id', getCharacterById);
router.get('/api/rickandmorty/detail/:detailId', getCharacterDetailsById);
router.get('/api/rickandmorty/fav', getFavoriteCharacters);
router.post('/api/rickandmorty/fav', addFavoriteCharacter);
router.delete('/api/rickandmorty/fav/:id', deleteFavoriteCharacterById);

module.exports = router;