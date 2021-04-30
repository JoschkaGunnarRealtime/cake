import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { anlassgebundenesfreigebaeckModel } from './models/anlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeck from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeck.js';
import IAnlassgebundenesfreigebaeckbedarfsanteil from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeckbedarfsanteil.js';

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

app.delete('/anlassgebundenesfreigebaeck/:anlassgebundenesfreigebaeck/:bedarfsanteilsnummer', async (req: any, res: any) => {
  console.log('anlassgebundenesfreigebaeck:', req.params['anlassgebundenesfreigebaeck']);
  anlassgebundenesfreigebaeckModel.findById(req.params['anlassgebundenesfreigebaeck'])
  .then((rueckgabewertZumZweckeDerKonvertierung: any) => {
    if(rueckgabewertZumZweckeDerKonvertierung) {
      const anlassgebundenesfreigebaeck = rueckgabewertZumZweckeDerKonvertierung as IAnlassgebundenesfreigebaeck;
      anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile = 
        anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile.map((anlassgebundenesfreigebaeckbedarfsanteil) => {
  
        if(anlassgebundenesfreigebaeckbedarfsanteil._id.toString() === req.params['bedarfsanteilsnummer']) {
          anlassgebundenesfreigebaeckbedarfsanteil.type.push('zumverzehrvorgemerkt');
          console.log('Ich drücke auf den Kuchen!!');
        }
        return anlassgebundenesfreigebaeckbedarfsanteil;
      });
      anlassgebundenesfreigebaeckModel.findByIdAndUpdate(req.params['anlassgebundenesfreigebaeck'], anlassgebundenesfreigebaeck)
      .then(() => {
        console.log('Und wech das Stück');
      })
      .catch((err) => {
        console.log('Speichern geht nicht ... irgendwie ' + JSON.stringify(err));
      });
    } else {
      console.log('RückgabewertzurKonvertierung ist nicht ... also existiert nicht... also sie wissen schon');
    }

  })
  .catch((err) => {
    console.log('Error getting AnlassgebundenesFreigebäck');
  });
      
});

app.post('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', (req: any, res: any) => {
  console.log(req.body);
});

app.listen(process.env.PORT, () => {
  console.log('Started Server on Port ' + process.env.PORT);
});
