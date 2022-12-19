const { 
  getCurrencies,
  convertCurrency
} = require('../services/currencies');

const { Router } = require('express');
const router = Router();
router.get("/currency/:code", (req, res) => getCurrencies(req, res));
router.get("/currency/convert", (req, res) => convertCurrency(req, res));

module.exports = router;