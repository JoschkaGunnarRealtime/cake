

export default interface IAnlassgebundenesfreigebaeckbedarfsanteil {
    _id: string;
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: number;
    type: Array<string>;
    content: {
        url: String,
        bedienungsanleitung: String,
    };

}