import express from 'express';
import http from 'http';
import logger from './config/winston';
import addRouters from './routes/app-router';

const app = express();
const server = http.createServer(app);

addRouters(app);

const port = process.env.PORT || process.env.SERVER_PORT;
server.listen(port, () => {
  logger.debug(`Server be jammin' on port ${port}!`);
});

export default app;
