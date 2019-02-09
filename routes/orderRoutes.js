const express = require('express');
const passport = require('passport');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {
  session: false
}), orderController.getAll);
router.post('/', passport.authenticate('jwt', {
  session: false
}), orderController.create);


module.exports = router;

