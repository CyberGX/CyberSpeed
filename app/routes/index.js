const router = require('express').Router();

let index_controller = require('../controllers/indexController')

router.use('/api', require('./api'));
router.route('/').get(index_controller.home);

module.exports = router