import express, { json } from 'express';
import morgan from 'morgan';
import '@babel/polyfill';

const urlExists = require('url-exists');

//import routes
const postRoutes = require('./routes/Post.routes');

const server = express();

//settings
server.set('port', process.env.PORT || 3000);

//middlewares
server.use(morgan('dev'));
server.use(json());
server.use(express.json());

//routes
server.use('/posts', postRoutes);

//server
server.listen(server.get('port'), () => {
    console.log('Server on port', server.get('port'));
});