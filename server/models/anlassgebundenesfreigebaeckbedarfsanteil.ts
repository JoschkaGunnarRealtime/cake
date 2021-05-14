import mongoose from 'mongoose';

const Anlassgebundenesfreigebaeckbedarfsanteil = new mongoose.Schema({
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: Number,
    type: Array,
    content: {
        url: String,
        bedienungsanleitung: String,
        feedbackZettel: String,
    },
});

export default Anlassgebundenesfreigebaeckbedarfsanteil;