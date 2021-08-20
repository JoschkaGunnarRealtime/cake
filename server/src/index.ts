import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import parse from 'url-parse';
import { anlassgebundenesfreigebaeckModel } from './models/anlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeck from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeckbedarfsanteil from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeckbedarfsanteil.js';
import makeApp from './app.js';

const app = await makeApp();

app.listen(process.env.PORT, () => {
  console.log('Started Server on Port ' + process.env.PORT);
});

