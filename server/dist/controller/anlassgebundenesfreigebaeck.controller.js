import CakeDB from "../cakedb.js";
export default {
    // get: async (req: any, res: any) => {
    //     let cakeDB = new CakeDB;
    //     const mengeAllerAnlassgebundendenfreigebaecke = cakeDB;
    //     res.status(200).json(mengeAllerAnlassgebundendenfreigebaecke);
    // },
    getCake: async (req, res) => {
        console.log('param', req.params["anlassgebundenesfreigebaeck"]);
        let cakeDB = new CakeDB();
        const mengeAllerAnlassgebundendenfreigebaecke = await cakeDB.getCake(req.params['anlassgebundenesfreigebaeck']);
        console.log(mengeAllerAnlassgebundendenfreigebaecke);
        res.status(mengeAllerAnlassgebundendenfreigebaecke.status).json(mengeAllerAnlassgebundendenfreigebaecke.data);
    },
    createCake: async (req, res) => {
        let cakeDB = new CakeDB();
        const rückgabeObjektAusDerBackstube = await cakeDB.createCake(req.body);
        res.status(rückgabeObjektAusDerBackstube.status).json(rückgabeObjektAusDerBackstube);
    },
    deleteCake: async (req, res) => {
        let cakeDB = new CakeDB();
        const rückgabeBeiVerkonsumierung = await cakeDB.consumeCake(req.params['anlassgebundenesfreigebaeck'], req.params['bedarfsanteilsnummer']);
        res.status(rückgabeBeiVerkonsumierung.status).json(rückgabeBeiVerkonsumierung);
    },
    postFeedback: async (req, res) => {
        let cakeDB = new CakeDB();
        const rückgabeBeiFeedbackHingabe = await cakeDB.postFeedback(req.params['anlassgebundenesfreigebaeck'], req.params['bedarfsanteilsnummer'], req.body.feedbackZettel);
        res.status(rückgabeBeiFeedbackHingabe.status).json(rückgabeBeiFeedbackHingabe);
    }
};
