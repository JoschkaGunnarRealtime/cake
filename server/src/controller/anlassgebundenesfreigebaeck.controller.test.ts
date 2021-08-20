import anlassgebundenesfreigebaeckController from './anlassgebundenesfreigebaeck.controller';

jest.mock('../cakedb');

describe('Cake Controller', () => {
    beforeEach(() => {  
        
    });

    it('should get a cake from the cakeDB', async () => {
        let req = {
            params: {
                anlassgebundenesfreigebaeck: 1234
            }
        };
        let res = {
            status: () => { return res },
            json: () => { return res },
        };
        const statusSpy = jest.spyOn(res, 'status');
        const jsonSpy = jest.spyOn(res, 'json');
        await anlassgebundenesfreigebaeckController.getCake(req, res); 
        expect(statusSpy).toHaveBeenCalled();
    });
});