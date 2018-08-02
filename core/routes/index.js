const router = require('express').Router();

// 404 Route
router.use(function (req, res, next) {
    res.status(404).render('errors/404');
})

// 500 Inrernal Server Error Route
router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).render('errors/500')
})

module.exports = router;