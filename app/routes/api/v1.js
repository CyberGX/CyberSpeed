const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/ping', require(path.resolve('./app/controllers/api/v1/homeController')).ping);

module.exports = router;
