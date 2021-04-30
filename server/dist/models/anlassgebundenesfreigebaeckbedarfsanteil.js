import mongoose from 'mongoose';
export const AnlassgebundenesfreigebaeckbedarfsanteilSchema = new mongoose.Schema({
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: Number,
    type: Array,
    content: {
        url: String,
        bedienungsanleitung: String,
    },
});
export const AnlassgebundenesfreigebaeckbedarfsanteilModel = mongoose.model('Anlassgebundenesfreigebaeckbedarfsanteil', AnlassgebundenesfreigebaeckbedarfsanteilSchema);
