const ValidateProjectRequest = (projectRequestModel) => {

    // Validate Name
    if (!projectRequestModel.Name) return ({ valide: false, message: "Name cannot be empty." });

    // Validate Location
    if (!projectRequestModel.Location) return ({ valide: false, message: "Location cannot be empty." });

    // Validate Description
    if (!projectRequestModel.Description) return ({ valide: false, message: "Description cannot be empty." });

    // Validate SubDate
    if (!projectRequestModel.SubDate) return ({ valide: false, message: "SubDate cannot be empty." });

    // Validate Reminder
    if (!projectRequestModel.Reminder) return ({ valide: false, message: "Reminder cannot be empty." });

    // Validate Email
    if (!projectRequestModel.ProjectType) return ({ valide: false, message: "ProjectType cannot be empty." });

    // Validate SurveyHelpers
    if (!projectRequestModel.SurveyHelpers) return ({ valide: false, message: "SurveyHelpers cannot be empty." });

    // Validate Model
    if (!projectRequestModel.Model) return ({ valide: false, message: "Model cannot be empty." });

    // Validate Userid
    if (!projectRequestModel.Userid) return ({ valide: false, message: "Userid cannot be empty." });

    return ({ valide: true, message: "" });
}

export const validation = { ValidateProjectRequest };