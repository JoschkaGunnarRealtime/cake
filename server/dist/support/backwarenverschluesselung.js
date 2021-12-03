const BackwarenVerschluesselungsTabelle = {
    Broetchen: '0',
    Kranzkuchen: '1',
    Lebkuchen: '2',
    Franzbroetchen: '3',
    Zwieback: '4',
    Schokoladenplaetzchen: '5',
    Christstollen: '6',
    Baklava: '7',
    Zimtschnecke: '8',
    Cheescake: '9',
    Daifuku: 'a',
    Erdbeerkuchen: 'b',
    Apfelzimtkuchen: 'c',
    Melonpan: 'd',
    Schwarzwaeldertorte: 'e',
    Diversebackwarenauseuropaunddemrestderwelt: 'f'
};
export default (req, res, next) => {
    for (const [key, value] of Object.entries(BackwarenVerschluesselungsTabelle)) {
        req.url = req.url.replaceAll(key, value);
    }
    next();
};
