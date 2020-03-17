import express from 'express';
import connection from './config/db';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    connection();
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
