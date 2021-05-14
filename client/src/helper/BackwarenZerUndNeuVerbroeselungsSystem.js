const backwarenVerschluesselungsTabelle = {
    '0': 'Broetchen',
    '1': 'Kranzkuchen',
    '2': 'Lebkuchen',
    '3': 'Franzbroetchen',
    '4': 'Zwieback',
    '5': 'Schokoladenplaetzchen',
    '6': 'Christstollen',
    '7': 'Baklava',
    '8': 'Zimtschnecke',
    '9': 'Cheescake',
    'a': 'Daifuku',
    'b': 'Erdbeerkuchen',
    'c': 'Apfelzimtkuchen',
    'd': 'Melonpan',
    'e': 'Schwarzwaeldertorte',
    'f': 'Diversebackwarenauseuropaunddemrestderwelt',
};

const zusammenbroeseln = (uuid) => {
  return [...uuid].map((character) => backwarenVerschluesselungsTabelle[character]).join('');
}

export default zusammenbroeseln;