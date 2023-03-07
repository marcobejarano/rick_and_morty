require('dotenv').config();
const http = require('http');
const characters = require('../utils/data');

const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	if (req.url.includes('/api/rickandmorty/')) {
		const id = req.url.split('/')[3];
		const character = characters.find(character => character.id === Number(id));

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(character));
	}
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${ hostName }/${ port }`);
});