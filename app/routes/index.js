const router = require('express').Router();

let index_controller = require('../controllers/indexController')

router.route('/').get(index_controller.home);

module.exports = router