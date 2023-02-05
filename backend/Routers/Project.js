import { validation } from "../Validations/Project.js";
import { projectService } from "../Services/ProjectService.js";
import { ProjectRequestModel } from '../Models/Project/ProjectRequestModel.js';

import Express from "express";
const router = new Express.Router();

router.post("/project/add", async (req, res, next) => {

    try {

        const projectDetail = new ProjectRequestModel({
            Name: req.body.name,
            Location: req.body.location,
            Description: req.body.description,
            SubDate: req.body.subDate,
            Reminder: req.body.reminder,
            ProjectType: req.body.projectType,
            SurveyHelpers: req.body.surveyHelpers,
            Model: req.body.model,
            Userid: req.body.userid,
        })

        // validation
        var validateResult = validation.ValidateProjectRequest(projectDetail);

        if (!validateResult.valide){
            res.status(400).send({ project: null, message: validateResult.message });
            return;
        } 

        // db operation
        const dbResult = await projectService.CreateNewProject(projectDetail);

        if (dbResult.isSuccess) {
            res.status(201).send({ project: dbResult.projectDetail, message: dbResult.message });
        } else {
            res.status(400).send({ project: null, message: dbResult.message });
        }

    } catch (err) {
        res.status(400).send({ project: null, message: err });
    }
});

export default router;