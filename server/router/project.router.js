const express = require('express');
const projectRouter = express.Router();
const {getProjectData, getSpecificProjectData, postProjectData} = require("../controller/projects.controller");

projectRouter.get("/", getProjectData);
projectRouter.post("/", postProjectData);
projectRouter.get("/:id", getSpecificProjectData);


module.exports = projectRouter ; 