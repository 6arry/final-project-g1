const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// routes
router.use("/", apiRoutes);

module.exports = router;