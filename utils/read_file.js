const fsPromises = require('fs').promises;

module.exports = (pathJson) => fsPromises.readFile(pathJson, { encoding: 'utf8' })
  .then((file) => JSON.parse(file));
