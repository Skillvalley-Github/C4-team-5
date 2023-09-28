const mongoose = require("mongoose");
const dotenv = require("dotenv");
const uploadContract = require("./controllers/contractController");
const multer = require("multer");
const express = require("express");
const cors = require("cors");
const app = express();
const contractRouter = require('./routes/contractRoutes');

dotenv.config({ path: "./env" });
app.use(cors());
// const db = 'mongodb+srv://namankulshresth:fTsXjzyjhFUUk56@cluster0.a9k9y92.mongodb.net/freelancershala?retryWrites=true&w=majority'
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,  
//     useUnifiedTopology: true,
//   })
//   .then((con) => {
//     console.log(con.connections);
//     console.log("DB connected successfully");
//   })
//   .catch((error) => {
//     console.error(`error: ${error}`);
//     process.exit(1);
//   });

  // Define storage for uploaded files
  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

// Serve the static files in the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle file upload
app.post(contractRouter, (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully.');
});
  // const port = process.env.PORT || 5000;
  const port = 4000
  app.listen(port, () =>{
    console.log(`running on port ${port}`);
  })

  


