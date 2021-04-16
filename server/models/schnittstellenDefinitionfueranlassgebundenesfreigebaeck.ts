import mongoose from 'mongoose';
import IAnlassgebundenesfreigebaeckbedarfsanteil from './schnittstellenDefinitionfueranlassgebundenesfreigebaeckbedarfsanteil.js';

export default interface IAnlassgebundenesfreigebaeck extends mongoose.Document {
    anlassgebundenesfreigebaeck: string;
    anlassgebundenesfreigebaeckbedarfsanteile: Array<IAnlassgebundenesfreigebaeckbedarfsanteil>;
}