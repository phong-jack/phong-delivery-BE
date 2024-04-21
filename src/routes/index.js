const express = require("express");
const router = express.Router();

router.use("/foodDrink", require("./foodDrink"));
router.use("/category", require("./category"));
router.use("/order", require("./order"));
router.use("/shop", require("./shop"));
router.use("/user", require("./user"));
router.use("/", require("./access"));

module.exports = router;
