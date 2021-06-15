import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as express from 'express';
import { AppBuilder } from './appBuilder';
import { errorMiddleware } from './middleware/error.middleware';

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev'),
});

const app = express();
const port: number = parseInt(process.env.PORT);
const appBuilder = new AppBuilder(app);

appBuilder
    .addMiddleware(express.json())
    .addMiddleware(errorMiddleware)
    .build(port, () => console.log('Listening on port', port));
