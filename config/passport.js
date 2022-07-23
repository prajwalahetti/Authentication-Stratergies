const GoogleStratergy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");
const GithubStrategy=require("passport-github2").Strategy;
const FacebookStrategy=require("passport-facebook").Strategy;
module.exports = function (passport) {
  passport.use(
    new GoogleStratergy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          authId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        };
        try {
          let user = await User.findOne({ authId: profile.id });
          if (user) {
            console.log("old user");
            done(null, user);
          } else {
            console.log("new user");
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const newUser = {
          authId: profile.id,
          displayName: profile.displayName,
         
        };
        try {
          let user = await User.findOne({ authId: profile.id });
          if (user) {
            console.log(profile);
            console.log("old user");
            done(null, user);
          } else {
            console.log("new user");
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
       
      }
    )
  );
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const newUser = {
          authId: profile.id,
          displayName: profile.displayName,
         
        };
        try {
          let user = await User.findOne({ authId: profile.id });
          if (user) {
            console.log(profile);
            console.log("old user");
            done(null, user);
          } else {
            console.log("new user");
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
       
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
