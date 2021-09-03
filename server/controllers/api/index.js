// required modules
const router = require("express").Router();

const userRoutes = require("./user-routes");

//routes to use
router.use("/users", userRoutes);


module.exports = router;

