const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});