import express from 'express';

import routes from './routes';

const app = express();
app.use(routes);

console.log('Routes loadded');

export default app;
