const jwt = require("jsonwebtoken");

exports.googleCallback = (req, res) => {
  const user = req.user;

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });

  res.redirect("https://auth-system-sjk5.vercel.app/dashboard");
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

exports.getUser = (req, res) => {
  res.json(req.user);
};
