import express, { Router } from 'express';
import path from 'path';
import serverless from 'serverless-http';

const api = express();

const router = Router();
router.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));

api.use('/', router);


api.listen()

export const handler = serverless(api);

