import mongoose from 'mongoose';
import AnlassgebundenesfreigebaeckbedarfsanteilSchema from './anlassgebundenesfreigebaeckbedarfsanteil';

const AnlassgebundenesfreigebaeckSchema = new mongoose.Schema({
    anlassgebundenesfreigebaeck: String,
    anlassgebundenesfreigebaeckbedarfsanteile: [AnlassgebundenesfreigebaeckbedarfsanteilSchema],
});

export const anlassgebundenesfreigebaeckModel = mongoose.model('Anlassgebundenesfreigebaeck', AnlassgebundenesfreigebaeckSchema)