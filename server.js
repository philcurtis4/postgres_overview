const express = require('express');
const cors = require('cors');

const client = require('./db/connection');
const api_routes = require('./routes/api_routes');

const app = express();
const PORT = 3333;

// allow json to be sent through requests
app.use(express.json());

//Allow all origins to access our API
app.use(cors());

//Load routes
app.use('/api', api_routes);

client.connect()
	.then(() => {
		console.log('db connected');

		app.listen(PORT, () => {
			console.log('Express sever started on', PORT);
		})
	})