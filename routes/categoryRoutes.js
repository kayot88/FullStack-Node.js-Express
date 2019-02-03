const express = require('express');
const categoryControler = require('../controllers/categoryController');
const router = express.Router();

router.get('/', categoryControler.getAll);
router.get('/:id', categoryControler.getById);
router.delete('/:id', categoryControler.remove);
router.post('/', categoryControler.create);
router.patch('/:id', categoryControler.update);


module.exports = router;
