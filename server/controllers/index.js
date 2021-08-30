const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes.js');
const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
