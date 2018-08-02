const router = require('express').Router();

let index_controller = require('../controllers/indexController')

router.use('/api', require('./api'));
router.route('/').get(index_controller.home);

// 404 Route
router.use(function (req, res, next) {
    res.status(404).render('errors/404');
})

// 500 Inrernal Server Error Route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router