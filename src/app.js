import express from 'express';

import connectionDb from './config/database';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    connectionDb();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
