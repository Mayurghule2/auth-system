const express = require("express");
const passport = require("passport");
const { googleCallback, logout, getUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

router.get("/me", authMiddleware, getUser);
router.post("/logout", logout);

module.exports = router;