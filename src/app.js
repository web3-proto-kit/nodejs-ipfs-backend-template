import express from 'express';
import http from 'http';
import logger from './config/winston';
import addRouters from './routes/app-router';
// import * as Sentry from '@sentry/node';
// Sentry.init({ dsn: 'https://bae974e906d64c43bcc184d8ff783832@sentry.io/1375147' });

logger.info('I am a new custom info for sentry to find');

const app = express();
const server = http.createServer(app);

addRouters(app);

server.listen(process.env.SERVER_PORT, () => {
  logger.debug(`Server be jammin' on port ${process.env.SERVER_PORT}!`);
});

export default app;
