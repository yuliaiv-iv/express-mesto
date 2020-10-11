const path = require('path');
const readFile = require('../utils/read_file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Ошибка на сервере' });
    });
};

module.exports = {
  getCards,
};
