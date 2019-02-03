exports.login = (req, res) => {
  res.status(200).json({
    "login": 'from controllers'
  });
};
exports.register = (req, res) => {
  res.status(200).json({
    "register": 'from controllers'
  });
};