require('dotenv').config();
require('@babel/register');

const express = require('express');

const indexRouter = require('./routes/index.routes');

const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT??3000;

serverConfig(app)

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Serever has been started at port:${PORT}`);
});