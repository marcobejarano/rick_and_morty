const express = require('express');
const router = express.Router();

const {
	getFavoriteCharacters,
	addFavoriteCharacter,
	deleteFavoriteCharacterById
} = require('../controllers/favs.controller');
const getCharacterById = require('../controllers/getCharacterById.controller');
const getCharacterDetailsById = require('../controllers/getCharacterDetailsById.controller');

router.get('/character/:id', getCharacterById);
router.get('/detail/:detailId', getCharacterDetailsById);
router.get('/fav', getFavoriteCharacters);
router.post('/fav', addFavoriteCharacter);
router.delete('/fav/:id', deleteFavoriteCharacterById);

module.exports = router;