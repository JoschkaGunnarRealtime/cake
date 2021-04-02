import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('combined'));
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
          kommentarzettel: 'hm. legger' ,
        } 
      },
    ],
  },
}

app.get('/anlassgebundenesfreigebaeck/:kuchenblechnummer', (req: any, res: any) => {
  console.log(req.param['kuchenblechnummer'])
  res.status(200).json(tortenlager);
});

app.delete('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', (req: any, res:any) => {
  // hier wird der Type 'ZumVerzehrVorgemerkt' in dem kuchenstueck eingetragen
  
});

app.post('/anlassgebundenesfreigebaeck/:kuchenblechnummer/:kuchenstueck', (req: any, res: any ) => {
  console.log(req.body);
});

app.listen(process.env.PORT || 3000);
