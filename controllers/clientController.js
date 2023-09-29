// const contract = require("../models/contractModel");
const multer = require("multer");

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startswith("doc")) {
//     cd(null, true);
//   } else {
//     cb("cannot upload this file.", 400);
//   }
// };

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadContract = upload.single("file");
