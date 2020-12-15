var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* Productos */
router.get('/:id', productsController.detalle);

module.exports = router;
