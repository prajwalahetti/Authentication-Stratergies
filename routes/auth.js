const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const passport = require("passport");

// auth/google
// get auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//auth/google/callback
// get
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["profile", "user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);
// auth/current_user
// get
router.get("/current_user", ensureAuth, (req, res) => {
  res.json(req.user);
});

// logout user
// auth/logout
router.get("/logout", (req, res) => {
  //req.logout();
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(`${process.env.CLIENT_URL}/login`);
  });

  //res.redirect(process.env.CLIENT_URL);
});
module.exports = router;
