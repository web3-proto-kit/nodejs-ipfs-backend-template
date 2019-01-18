import healthcheckRouter from './healthcheck/router';
import ipfsRouter from './ipfs/router';
import hashValidatorRouter from './hash-validator/router';

const addRouters = (app) => {
  app.use(healthcheckRouter);
  app.use(ipfsRouter);
  app.use(hashValidatorRouter);
};

export default addRouters;
