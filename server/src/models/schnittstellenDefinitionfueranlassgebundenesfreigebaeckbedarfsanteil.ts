

export default interface IAnlassgebundenesfreigebaeckbedarfsanteil {
    _id: string;
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: number;
    type: String;
    content: {
        url: String,
        bedienungsanleitung: String,
        feedbackZettel: String,
    };

}