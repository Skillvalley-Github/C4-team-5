// const contract = require("../models/contractModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadContract = upload.single("file");
exports.uploadInvoice = upload.single("invoice");
