require('dotenv').config();
const http = require('http');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	if (req.url.includes('/onsearch/')) {
		const id = req.url.split('/').at(-1);
		getCharById(res, id);
		return;
	} 

	if (req.url.includes('/detail/')) {
		const id = req.url.split('/').at(-1);
		getCharDetail(res, id);
		return;
	}

	res.writeHead(404, { 'Content-Type': 'plain/text' });
	res.end('Route not found');
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${ hostName }/${ port }`);
});