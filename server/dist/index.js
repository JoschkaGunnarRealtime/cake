import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.get('/anlassgebundenesfreigebaeck', (req, res) => {
    res.status(200).json({
        Anlassgebundenesfreigebäck: {
            id: 1,
            stuecke: [
                { url: 'https://www.youtube.com/watch?v=MAlSjtxy5ak', bedienungsanleitung: 'Learn' },
                { url: 'https://www.youtube.com/watch?v=_WH6cbwZ5m8', bedienungsanleitung: 'LEarn faster' },
                { kommentarzettel: 'hm. legger' },
            ],
        },
    });
});
app.listen(process.env.PORT || 3000);
