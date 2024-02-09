const { Files } = require("../Model");
const model = require("../Model");
const CryptoJS = require("crypto-js");
const fileUploads = require("../Middleware/Uploads");

exports.getFiles = async (req, res) => {
  try {
    var files = await Files.findAll({
      where: {
        isDelete: false,
      },
    });
    if (!files) {
      res.status(400).json({
        message: "Data not found",
      });
    } else {
      let data = CryptoJS.AES.encrypt(
        JSON.stringify({ files }),
        "12345678"
      ).toString();
      res.status(200).json({
        message: "Success upload",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

exports.addFiles = async (req, res) => {
  try {
    var temp = {
      fileName: `/uploads/${req.file.filename}`,
    };
    var files = await Files.create(temp);
    res.status(200).json({
      message: "Success upload",
      files,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.updateFiles = async (req, res) => {
  try {
    var temp = {
      fileName: `/uploads/${req.file.filename}`,
    };

    var file = await Files.update(temp, {
      where: {
        id: req.body.id,
      },
    });

    return res.status(200).send({
      message: "update User",
      file,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.deleteFiles = async (req, res) => {
  try {
    var file = await Files.update(
      { isDelete: true },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    return res.status(200).send({
      message: "update User",
      file,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};
