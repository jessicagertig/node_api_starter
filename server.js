// Note: Middleware and routing functions are called in the order that they are declared. For some middleware the order is important (for example if session middleware depends on cookie middleware, then the cookie handler must be added first). It is almost always the case that middleware is called before setting routes, or your route handlers will not have access to functionality added by your middleware.
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//import routers here:
//example:
// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');
// const productsRouter = require('../products/products-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//test to make sure server is up and running
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up', dbenv: process.env.NODE_ENV });
});

//direct server/app to use routers and add any additions to path such as 'api' if you nest server.js in a folder named 'api'
// server.use('/api', authRouter);
//or not nested:
// server.use('/', usersRouter);
// server.use('/', productsRouter);

module.exports = server;
