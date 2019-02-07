const express = require('express');
const categoryControler = require('../controllers/categoryController');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), categoryControler.getAll);
router.get('/:id', categoryControler.getById);
router.delete('/:id', categoryControler.remove);
router.post('/', categoryControler.create);
router.patch('/:id', categoryControler.update);


module.exports = router;
