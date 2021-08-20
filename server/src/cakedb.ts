import { anlassgebundenesfreigebaeckModel } from './models/anlassgebundenesfreigebaeck';
import IAnlassgebundenesfreigebaeck from './models/schnittstellenDefinitionfueranlassgebundenesfreigebaeck';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';

export default class CakeDB {
    private MONGO_URI: string = '';
    AnlassgebundenesfreigebaeckMengenSpeicherungsEntität: any;
    private bConnected = false;

    constructor() {
        dotenv.config({
            path: './config/config.env',
        });
        this.MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/anlassgebundesfreigebaeckmengenspeicherungsmedium';
    }

    async connectDB(): Promise<null | any> {
        try {
            this.AnlassgebundenesfreigebaeckMengenSpeicherungsEntität = await mongoose.connect(this.MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                authSource: 'admin',
                user: process.env.MONGO_INITDB_ROOT_USERNAME,
                pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
            });
            console.log("Database connected!");
            this.bConnected = true
        } catch (error) {
            this.bConnected = false;
            return {
                status: 500,
                data: 'Ich krieg die Datenbank nicht zu fassen ...',
                success: false,
            }
        }

    }

    async getCake(index: number): Promise<any> {
        try {
            const rückgabeBeiKuchenSuchen = await anlassgebundenesfreigebaeckModel.findOne({ _id: index });
            return {
                status: 200,
                success: true,
                data: rückgabeBeiKuchenSuchen,
            }
        } catch (error) {
            return {
                data: 'Your Carinsurance is due - act now!',
                status: 404,
                success: false
            }
        }

    }

    async createCake(body: any): Promise<any> {
        return await anlassgebundenesfreigebaeckModel.create(body)
            .then((kuchen: any) => {
                return {
                    message: 'Danke für die Torte',
                    status: 200,
                    id: kuchen._id,
                    success: true,
                }
            })
            .catch((err: any) => {
                return {
                    status: 404,
                    message: 'Nix Torte',
                    success: false,
                };
            });
    }

    async consumeCake(cakeID: string, pieceID: string): Promise<any> {
        let consumeCakeResult = null;
        try {
            consumeCakeResult = await anlassgebundenesfreigebaeckModel.findById(cakeID) as IAnlassgebundenesfreigebaeck;

        } catch (error) {
            return {
                status: 404,
                data: 'Kuchen nicht da :(',
                success: false
            }
        }

        consumeCakeResult.anlassgebundenesfreigebaeckbedarfsanteile =
            consumeCakeResult.anlassgebundenesfreigebaeckbedarfsanteile.map((anlassgebundenesfreigebaeckbedarfsanteil) => {

                if (anlassgebundenesfreigebaeckbedarfsanteil._id.toString() === pieceID) {
                    anlassgebundenesfreigebaeckbedarfsanteil.type = 'zumverzehrvorgemerkt';
                }
                return anlassgebundenesfreigebaeckbedarfsanteil;
            });
        try {
            const consumeUpdateResult = await anlassgebundenesfreigebaeckModel.findByIdAndUpdate(cakeID, consumeCakeResult);    
        } catch (error) {
            return {
                status: 500,
                success: false,
                data: "We're trying to reach you about your car's extended warranty" 
            }
        }
        return {
            status: 200,
            success: true,
            data: 'Stück ist zum Verzehr vorgemerkt',
        }
    }

    async postFeedback(cakeID: string, pieceID: string, feedbackText: string): Promise<any> {
        // TODO : Hier wird der Feedbackzettel hinterlegt.
        let rueckgabewertZumZweckeDerKonvertierung: any;
        try {
            rueckgabewertZumZweckeDerKonvertierung = await anlassgebundenesfreigebaeckModel.findById(cakeID);
        } catch (error) {
            return {
                status: 404,
                data: 'Nicht zu Hause, das Stück',
                success: false,
            }
        }

        let anlassgebundenesfreigebaeck = rueckgabewertZumZweckeDerKonvertierung as IAnlassgebundenesfreigebaeck;
        anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile =
            anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile.map((anlassgebundenesfreigebaeckbedarfsanteil) => {
                if (anlassgebundenesfreigebaeckbedarfsanteil._id.toString() === pieceID) {
                    anlassgebundenesfreigebaeckbedarfsanteil.type = 'zettel';
                    anlassgebundenesfreigebaeckbedarfsanteil.content.feedbackZettel = feedbackText;
                }
                return anlassgebundenesfreigebaeckbedarfsanteil;
            });
        try {
            await anlassgebundenesfreigebaeckModel.findByIdAndUpdate(cakeID, anlassgebundenesfreigebaeck);
            return {
                status: 200,
                success: true,
                data: 'Feedback written',
            }
        } catch (error) {
            return {
                status: 500,
                success: false,
                data: 'Fehler beim Update',
            }
        }

    }
}