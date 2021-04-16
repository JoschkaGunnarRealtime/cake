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

let tortenlager = {
  Anlassgebundenesfreigebaeck: {
    kuchenblechzuteilungsidentifikationsnummer: 1,
    anlassgebundenesfreigebaeckbedarfsanteile: [
      {
        anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: 1,
        type: ['anlassgebundenesfreigebaeckbedarfsanteil'],
        content: {
          url: 'https://www.youtube.com/watch?v=MAlSjtxy5ak',
          bedienungsanleitung: 'Learn',
        },
      },
      {
        anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: 2,
        type: ['anlassgebundenesfreigebaeckbedarfsanteil'],
        content: {
          url: 'https://www.youtube.com/watch?v=_WH6cbwZ5m8',
          bedienungsanleitung: 'Learn faster',
        }
      },
      {
        anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: 3,
        type: ['zettel'],
        content: {
          kommentarzettel: 'hm. legger',
        }
      },
    ],
  },
}
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
  res.status(200).json(tortenlager);
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

app.delete('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', async (req: any, res: any) => {
  const anlassgebundenesfreigebaeck = await anlassgebundenesfreigebaeckModel.findById(req.params['kuchenblechnummer']) as IAnlassgebundenesfreigebaeck;
  if (anlassgebundenesfreigebaeck === null) {
     res.status(404).json({});
  } else {
    console.log('Vorher: ' + JSON.stringify(anlassgebundenesfreigebaeck));
     anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile.forEach((anlassgebundenesfreigebaeckbedarfsanteil: IAnlassgebundenesfreigebaeckbedarfsanteil) => {
      if (`${anlassgebundenesfreigebaeckbedarfsanteil.anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer}` === req.params['kuchenstueck']) {
        anlassgebundenesfreigebaeckbedarfsanteil.type.push('zumverzehrvorgemerkt');
      }
    })
    console.log('Nachher: ' + JSON.stringify(anlassgebundenesfreigebaeck));
    const mengeAllerAnlassgebundendenfreigebaecke = await anlassgebundenesfreigebaeckModel.findOneAndUpdate(
      { '_id': req.param['kuchenblechnummer'] },
      { 
        '$set': {
          'anlassgebundenesfreigebaeckbedarfsanteile[0].type': ["zumverzehrvorgemerkt"]
        }
      }
    ).catch((err) => console.log(err));
    res.status(200).json({});
  }
});

app.post('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', (req: any, res: any) => {
  console.log(req.body);
});

app.listen(process.env.PORT, () => {
  console.log('Started Server on Port ' + process.env.PORT);
});
