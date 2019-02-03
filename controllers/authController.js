exports.login = (req, res) => {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password
    }
    // login: req.body
  });
};
exports.register = (req, res) => {
  res.status(200).json({
    "register": 'from controllers'
  });
};