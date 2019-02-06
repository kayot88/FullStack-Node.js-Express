const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');


exports.login = async (req, res) => {
  const candida = await User.findOne({
    email: req.body.email
  });
  if (candida) {
   const passwortRes = bcrypt.compareSync(req.body.password, candida.password)
   console.log(passwortRes);
   if (passwortRes) {
    const token = jwt.sign({
      email: candida.email,
      userId: candida._id 
    }, keys.jwt, {expiresIn: 60*60});
    res.status(200).json({token: `Bearer ${token}`}) 
   } else {
     res.status(401).json({message: 'not equal password'})
   };
  } else {
    res.status(404).json({
      massage: 'user with this email not found'
    });
  }
};

exports.register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const password = req.body.password;
  const candida = await User.findOne({
    email: req.body.email
  });
  if (candida) {
    res.status(409).json({
      message: 'Her tam. Takoy zaniat'
    });
  } else {
    try {
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      }).save().then(console.log(`Adedd new`))
    } catch (e) {
      console.log(e);
    }
  }
};