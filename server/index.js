const express = require("express");
var bodyParser = require('body-parser');
const cors = require("cors");
const dbConnect = require("./dbconnect");
const projectRouter = require('./router/project.router');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

//apis
app.use("/project",projectRouter);


//api for test
app.get("/", (req,res)=>{
    res.send("hello World!")
});

//data base connection
dbConnect("mongodb+srv://123:123@cluster0.yqrhsrb.mongodb.net")
.then(()=>{
    app.listen(4000,()=>{console.log("Its connected to 4000")})
})
.catch((err)=>console.log(err))
