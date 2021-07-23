import { Router } from "express";
import anlassgebundenesfreigebaeckController from "../controller/anlassgebundenesfreigebaeck.controller.js";

export default (app: any) => {
    let router = Router();

    // router.get('/', anlassgebundenesfreigebaeckController.get);
    router.get('/:anlassgebundenesfreigebaeck', anlassgebundenesfreigebaeckController.getCake);
    router.post('/', anlassgebundenesfreigebaeckController.createCake);
    router.delete('/:anlassgebundenesfreigebaeck/:bedarfsanteilsnummer', anlassgebundenesfreigebaeckController.deleteCake);
    router.post('/:anlassgebundenesfreigebaeck/:bedarfsanteilsnummer', anlassgebundenesfreigebaeckController.postFeedback);

    app.use('/anlassgebundenesfreigebaeck', router);
};