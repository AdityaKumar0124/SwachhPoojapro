const express = require('express');
const router = express.Router();
const panditController = require('../controllers/panditController');
router.get('/', panditController.getPandits);
module.exports = router;