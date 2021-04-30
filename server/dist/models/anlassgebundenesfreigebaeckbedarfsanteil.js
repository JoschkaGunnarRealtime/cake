import mongoose from 'mongoose';
const Anlassgebundenesfreigebaeckbedarfsanteil = new mongoose.Schema({
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: Number,
    type: Array,
    content: {
        url: String,
        bedienungsanleitung: String,
    },
});
export default Anlassgebundenesfreigebaeckbedarfsanteil;
