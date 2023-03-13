require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('dev'));
app.use('/api/rickandmorty', router);

app.listen(port, hostName, () => {
	console.log(`Server running at http://${ hostName }/${ port }`);
});