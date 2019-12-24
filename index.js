const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser');

const db = require('./models');

dotenv.config();
const app = express();
db.sequelize.sync();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'rnbck'
}));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', (req, res) => {
  res.send('Hello world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});