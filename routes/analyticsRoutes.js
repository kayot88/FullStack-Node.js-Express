const express = require('express');
const analyticsController = require('../controllers/analyticsController');
const router = express.Router();

router.get('/overview', analyticsController.overview);
router.get('/analytics', analyticsController.analytics);


module.exports = router;
