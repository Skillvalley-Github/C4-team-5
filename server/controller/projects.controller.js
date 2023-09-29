const projectModel = require('../models/projects.model');


const getProjectData = async (req, res) => {
    const project = await projectModel.find();
    res.send(project)
}


const postProjectData = async (req, res) => {
    const projectData = projectModel({
        userId: req.body.id,
        projectName: req.body.name,
        details: req.body.details,
        rating: req.body.rating,
        price: req.body.price,
    })

    let savedData = await projectData.save();
    res.send(savedData);
}

const getSpecificProjectData = async (req, res) => {
    let oneData = await projectModel({ projectId: req.params.id })
    res.send(oneData);
}

module.exports = {getProjectData, getSpecificProjectData, postProjectData};