import mongoose from 'mongoose';

const Anlassgebundenesfreigebaeckbedarfsanteil = new mongoose.Schema({
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: Number,
    type: String,
    content: {
        url: String,
        bedienungsanleitung: String,
        feedbackZettel: String,
        visuellesgeschmacksmuster: String
    },
});

export default Anlassgebundenesfreigebaeckbedarfsanteil;