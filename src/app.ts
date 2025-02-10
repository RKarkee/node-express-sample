import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import corsOptions from '@config/corsConfiguration';
import config from './config';
import routes from 'routes';
import { NotFoundError } from '@core/middleware/errorHandler/NotFoundError';
const app = express();

//security purposes
app.use(helmet());
//define cors options
app.use(cors(corsOptions));
//parse incoming request

//parse the JSON object
app.use(express.json());

//parse the url encoded data
app.use(express.urlencoded({ extended: true }));

//import routes
app.use(`${config.version}/` + config.prefix, routes);

//handle the undefined routes

app.use('*', (req, res) => {
  throw new NotFoundError(`The requested API route ${req.originalUrl}does not exist`);
});

export default app;
