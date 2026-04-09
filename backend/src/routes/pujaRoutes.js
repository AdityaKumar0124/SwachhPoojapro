const express = require('express');
const router = express.Router();
const pujaController = require('../controllers/pujaController');
router.get('/', pujaController.getPujas);
module.exports = router;