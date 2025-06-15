// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../middleware/authMiddleware");
const User = require("../models/User");

router.post("/save-user", verifyFirebaseToken, async (req, res) => {
  const { uid, email, name, picture } = req.user;

  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({
        uid,
        email,
        displayName: name,
        photoURL: picture,
      });
      await user.save();
    }

    res.status(200).json({ message: "User saved", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

module.exports = router;
