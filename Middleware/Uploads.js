const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Check if the file is a PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// File categorization based on MIME type
exports.categorizeFile = (file) => {
  if (file.mimetype.startsWith("image/")) {
    return "images";
  } else if (file.mimetype === "application/pdf") {
    return "pdfs";
  } else {
    return "others";
  }
};

exports.upload = multer({ storage: storage });
