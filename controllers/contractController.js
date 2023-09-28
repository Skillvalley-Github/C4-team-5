// const contract = require("../models/contractModel");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/contract");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `contract-${req.file.originalname}-${Date.now()}.${ext}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startswith("doc")) {
//     cd(null, true);
//   } else {
//     cb("cannot upload this file.", 400);
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: multerFilter,
// });

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadContract = upload.single("file");
