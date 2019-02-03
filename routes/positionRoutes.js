const express = require('express');
const positionController = require('../controllers/positionController');
const router = express.Router();

router.get('/:categoryId', positionController.getByCategoryId);
router.post('/', positionController.create);
router.delete('/:id', positionController.remove);
router.patch('/:id', positionController.update);


module.exports = router;
