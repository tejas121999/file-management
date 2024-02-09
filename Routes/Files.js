const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Files");
const fileUploads = require("../Middleware/Uploads");

router.post("/get", controller.getFiles);
router.post("/post", fileUploads.upload.single("file"), controller.addFiles);
router.post(
  "/update",
  fileUploads.upload.single("file"),
  controller.updateFiles
);
router.post("/delete", controller.deleteFiles);

module.exports = router;
