import { Server } from 'http';
import config, { ConfigInterface } from '.';
import AppLogger from '@core/logger';
import { AppDataSource } from './db.config';

const configDetails = config as ConfigInterface;

const logger = new AppLogger();
let RETRY_COUNT = 0;

async function dbConnection(server: Server): Promise<boolean> {
  try {
    const response = await AppDataSource.initialize();
    return response.isInitialized;
  } catch (error: unknown) {
    if (RETRY_COUNT < configDetails.db.retryCount) {
      logger.error(`Database connection failed. Retrying... Attempt ${RETRY_COUNT}`);
      setTimeout(() => dbConnection(server), 5000);
    }
    if (RETRY_COUNT >= configDetails.db.retryCount) {
      logger.error('Database connection failed. Exiting application');
      server.close(() => {
        process.exit();
      });
    }
    RETRY_COUNT++;
    await dbConnection(server);
    return false;
  }
}

export default dbConnection;
