import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.get('/torte', (req, res) => {
    res.status(200).json([{
            torte: {
                id: 1,
                stuecke: [
                    { url: 'http://youtube.com/IchBinEinVide0', bedienungsanleitung: 'NSFW' },
                    { url: 'http://youtube.com/IchBinAuchEinVideo', bedienungsanleitung: 'SFW' },
                    { kommentarzettel: 'hm. legger' },
                ],
            },
        }]);
});
app.listen(process.env.PORT || 3000);
