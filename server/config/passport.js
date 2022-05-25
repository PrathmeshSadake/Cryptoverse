var GoogleStrategy = require('passport-google-oauth20');
const passport = require('passport');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'https://www.example.com/oauth2/redirect/google',
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
