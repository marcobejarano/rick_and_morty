require('dotenv').config();
const app = require('./app');

const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

app.listen(port, hostName, () => {
	console.log(`Server running at http://${ hostName }/${ port }`);
});