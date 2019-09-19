const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const login = require("./login");

// routes
router.use("/", apiRoutes);
router.use("/", login);

module.exports = router;