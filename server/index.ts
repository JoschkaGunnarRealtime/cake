import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { anlassgebundenesfreigebaeckModel } from './models/anlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeck from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeckbedarfsanteil from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeckbedarfsanteil.js';
import { AnlassgebundenesfreigebaeckbedarfsanteilModel } from './models/anlassgebundenesfreigebaeckbedarfsanteil.js';

const app = express();
dotenv.config({
  path: './config/config.env',
});

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/anlassgebundesfreigebaeckmengenspeicherungsmedium'
const AnlassgebundenesfreigebaeckMengenSpeicherungsEntität = await mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
console.log('Database connected!');

app.get('/anlassgebundenesfreigebaeck/:kuchenblechnummer', async (req: any, res: any) => {
  console.log(req.param['kuchenblechnummer'])
  const mengeAllerAnlassgebundendenfreigebaecke = await anlassgebundenesfreigebaeckModel.findOne({
    id: req.param['kuchenblechnummer']
  });
  res.status(200).json(mengeAllerAnlassgebundendenfreigebaecke);
});

app.get('/anlassgebundenesfreigebaeck', async (req: any, res: any) => {
  const mengeAllerAnlassgebundendenfreigebaecke = await anlassgebundenesfreigebaeckModel.find();
  res.status(200).json(mengeAllerAnlassgebundendenfreigebaecke);
});

app.post('/anlassgebundenesfreigebaeck', (req, res) => {
  anlassgebundenesfreigebaeckModel.create(req.body)
    .then(() => {
      console.log(req.body);
      res.status(200).json({
        message: 'Danke für die Torte',

      })
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Nix Torte',
      });
      console.log(err);
    });
});

app.delete('/anlassgebundenesfreigebaeckbedarfsanteil/:kuchenstueck', async (req: any, res: any) => {
  console.log('Kuchenstueck:', req.params['kuchenstueck']);
  AnlassgebundenesfreigebaeckbedarfsanteilModel.findById(req.params['kuchenstueck'])
  .then((temporärerRückgabewertZumZweckDerKonvertierung) => {
    console.log('was ist das:', temporärerRückgabewertZumZweckDerKonvertierung);
    const anlassgebundenesfreigebaeckbedarfsanteil = temporärerRückgabewertZumZweckDerKonvertierung as unknown as IAnlassgebundenesfreigebaeckbedarfsanteil;
    if (temporärerRückgabewertZumZweckDerKonvertierung) {
      if (anlassgebundenesfreigebaeckbedarfsanteil === null) {
        console.log('No agfgba found - aborting...');
        res.status(404).json({});
      } else {
        console.log('Vorher: ' + JSON.stringify(anlassgebundenesfreigebaeckbedarfsanteil));
        anlassgebundenesfreigebaeckbedarfsanteil.type.push('zumverzehrvorgemerkt');
        AnlassgebundenesfreigebaeckbedarfsanteilModel.findByIdAndUpdate(req.params['kuchenstueck'], anlassgebundenesfreigebaeckbedarfsanteil)
        .then(() => {
          console.log('Nom Nom');
        })
        .catch((err) => {
          console.log('Cake-Shortage detected!!!! FBI, open Up');
        });
      }
      console.log('Nachher: ' + JSON.stringify(anlassgebundenesfreigebaeckbedarfsanteil));
      res.status(200).json({});
     } else {
      console.log('FAAALSCH!!!!');
      res.status(404).json({
        error: 'Kein Anlassgebundenesfreigebaeckbedarfsanteil gefunden!'
      });
    }
  })
  .catch((err) => {
    console.log('MongoDB Error : ' + JSON.stringify(err));
  })
  
  

});

app.post('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', (req: any, res: any) => {
  console.log(req.body);
});

app.listen(process.env.PORT, () => {
  console.log('Started Server on Port ' + process.env.PORT);
});
