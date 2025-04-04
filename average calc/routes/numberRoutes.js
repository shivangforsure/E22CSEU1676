const express = require('express');
const { getNumbers } = require('../controllers/numberController');

const router = express.Router();

router.get('/numbers/:numberid', getNumbers);

module.exports = router;
