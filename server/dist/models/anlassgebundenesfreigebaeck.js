import mongoose from 'mongoose';
import Anlassgebundenesfreigebaeckbedarfsanteil from './anlassgebundenesfreigebaeckbedarfsanteil.js';
const AnlassgebundenesfreigebaeckSchema = new mongoose.Schema({
    anlassgebundenesfreigebaeck: String,
    anlassgebundenesfreigebaeckbedarfsanteile: [Anlassgebundenesfreigebaeckbedarfsanteil],
});
export const anlassgebundenesfreigebaeckModel = mongoose.model('Anlassgebundenesfreigebaeck', AnlassgebundenesfreigebaeckSchema);
