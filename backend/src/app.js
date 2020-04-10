import express from 'express';
import path from 'path';
import cors from 'cors';

import dbConnection from './config/database';

import routes from './routes';

const app = express();
dbConnection();

app.use(express.json());
app.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(5000);
