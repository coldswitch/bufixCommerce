exports.register = (req, res) => {
  res.render("register");
};
exports.login = (req, res) => {
  res.render("login");
};

// exports.validateRegister = (req, res, next) {
//   req.sanitizeBody
// }
