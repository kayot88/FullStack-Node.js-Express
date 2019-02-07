const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const categoryControler = require('../controllers/categoryController');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), categoryControler.getAll);
router.get('/:id', passport.authenticate('jwt', {
  session: false
}), categoryControler.getById);
router.delete('/:id', passport.authenticate('jwt', {
  session: false
}), categoryControler.remove);
router.post('/', passport.authenticate('jwt', {
  session: false
}), upload.single('image'), categoryControler.create);
router.patch('/:id', passport.authenticate('jwt', {
  session: false
}), upload.single('image'), categoryControler.update);


module.exports = router;

