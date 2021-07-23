import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import parse from 'url-parse';
import { anlassgebundenesfreigebaeckModel } from './models/anlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeck from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeckbedarfsanteil from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeckbedarfsanteil.js';
import AnlassgebundenesfreigebaeckRoutes from './routes/anlassgebundenesfreigebaeck.routes.js';
import backwarenEntschluesselungsModul from './support/backwarenverschluesselung.js';

const app = express();
const router = express.Router();

dotenv.config({
    path: './config/config.env',
});

app.use(morgan('combined'));
app.use(express.json());
app.use(backwarenEntschluesselungsModul);
app.use(cors());

const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/anlassgebundesfreigebaeckmengenspeicherungsmedium'
const AnlassgebundenesfreigebaeckMengenSpeicherungsEntität = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    authSource: 'admin',
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
});
console.log('Database connected!');

AnlassgebundenesfreigebaeckRoutes(app);

export default app;