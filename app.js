const express 	= require('express'),
	path 		= require('path'),
	http 		= require('http'),
	bodyParser 	= require('body-parser'),
	app 		= express(),
	cors 		= require('cors'),
	helmet 		= require('helmet'),
	port 		= process.env.PORT || '3000',
	api 		= require('./server/routes/api');

// Parsers for POST datail
app
    .use(cors())
    .use(helmet())
    .use(bodyParser.raw({limit: '50mb'}))
    .use(bodyParser.json({limit: '50mb'}))
    .use(bodyParser.urlencoded({limit: '50mb',extended: true}))
	.use(express.static(path.join(__dirname, 'dist')));

//api routes
app.use('/api', api); 

//Catch all other routes and return the index file
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html')); });

//get port from environment
app.set('port', port);

//create HTTP server
const server = http.createServer(app);

//listen on provided port
server.listen(port, () => console.log(`API running on localhost:${port}`));
