import dbConnection from '@config/db-connection';
import AppLogger from '@core/logger';

import http from 'http';
import config from './config';
import app from './app';

const logger = new AppLogger();

const server = http.createServer(app);

dbConnection(server)
  .then(async (res: boolean) => {
    logger.log('Database connection successful');
    if (res) {
      server.listen(config.port, (): void => {
        logger.log(`Server running on port ${config.port}`);
      });
    }
  })
  .catch((error: unknown) => {
    logger.error(`Database connection failed. Exiting application. Error: ${error}`);
    process.exit();
  });
