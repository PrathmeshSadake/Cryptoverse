const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
require('./config/passport');

var GoogleStrategy = require('passport-google-oauth20');
const passport = require('passport');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://localhost:3000/oauth2/redirect/google',
      scope: ['profile'],
      state: true,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log({
        accessToken,
        refreshToken,
        profile,
        cb,
      });
    }
  )
);

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => console.log('💻 Mondodb Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Server working 🔥');
});

app.get('/login/google', passport.authenticate('google'));
app.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    failureRedirect: '/login',
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect('/');
  }
);

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
