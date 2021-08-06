import BackwarenZerUndNeuVerbroeselungsSystem from '../../../src/helper/BackwarenZerUndNeuVerbroeselungsSystem';

describe('BackwarenZerUndNeuVerbroeselungsSystem', () => {
    describe('#zusammenbroeseln', () => {
        const backwarenVerschluesselungsTabelle = [
            ['0', 'Broetchen'],
            ['1', 'Kranzkuchen'],
            ['2', 'Lebkuchen'],
            ['3', 'Franzbroetchen'],
            ['4', 'Zwieback'],
            ['5', 'Schokoladenplaetzchen'],
            ['6', 'Christstollen'],
            ['7', 'Baklava'],
            ['8', 'Zimtschnecke'],
            ['9', 'Cheescake'],
            ['a', 'Daifuku'],
            ['b', 'Erdbeerkuchen'],
            ['c', 'Apfelzimtkuchen'],
            ['d', 'Melonpan'],
            ['e', 'Schwarzwaeldertorte'],
            ['f', 'Diversebackwarenauseuropaunddemrestderwelt']
        ];
        it.each(backwarenVerschluesselungsTabelle) ('checks if %s converted to %s', (key, backwarenBenennung) => {
            expect(BackwarenZerUndNeuVerbroeselungsSystem(key)).toEqual(backwarenBenennung);
        });
        
        it('should omit illegal characters', () => {
            expect(BackwarenZerUndNeuVerbroeselungsSystem('z')).toEqual('');
        });
    });
});