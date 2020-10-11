/* eslint-disable consistent-return */
const path = require('path');
const readFile = require('../utils/read_file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Ошибка на сервере' });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  readFile(jsonDataPath)
    .then((data) => {
      const userId = data.find((user) => user._id === id);
      return userId;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Ошибка на сервере' });
    });
};

module.exports = {
  getUsers,
  getUser,
};
