const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(cors())

app.get('/torte', (req,res) => {
  res.status(200).json(
    {
        torte: {
            stuecke: [
                {url: 'http://youtube.com/IchBinEinVide0', bedienungsanleitung: 'NSFW'},
                {url: 'http://youtube.com/IchBinAuchEinVideo', bedienungsanleitung: 'SFW'},
                {kommentarzettel: 'hm. legger'}
            ]
        }
    }
  )  
})

app.listen(process.env.PORT || 3000)
