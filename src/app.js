import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './database/database.connection.js';
import connectToServer from './server/server.connect.js';
import { signup } from './controllers/auth.controller.js';
import router from './routes/index.routes.js'

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

const db = connectToDatabase();

app.use(router);

connectToServer(app);