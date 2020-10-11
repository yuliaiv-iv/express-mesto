const express = require('express');
const path = require('path');
const routers = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(routers);

app.listen(PORT);
