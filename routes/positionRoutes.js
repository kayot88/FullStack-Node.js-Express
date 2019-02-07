const express = require('express');
const positionController = require('../controllers/positionController');
const passport = require('passport');
const router = express.Router();

router.get('/:categoryId', positionController.getByCategoryId);
router.post('/', passport.authenticate('jwt', {
  session: false
}), positionController.create);
router.delete('/:id', positionController.remove);
router.patch('/:id', positionController.update);


module.exports = router;
