const express = require("express");
const router = express.Router();
const file = require("../Routes/Files");

router.use("/file", file);

module.exports = router;
