export class ProjectRequestModel {

    constructor(obj) {

        obj = obj != null ? obj : {}

        this.Name = obj.Name != null ? obj.Name : ''
        this.Location = obj.Location != null ? obj.Location : ''
        this.Description = obj.Description != null ? obj.Description : ''
        this.SubDate = obj.SubDate != null ? obj.SubDate : ''
        this.Reminder = obj.Reminder != null ? obj.Reminder : ''
        this.ProjectType = obj.ProjectType != null ? obj.ProjectType : 0
        this.SurveyHelpers = obj.SurveyHelpers != null ? obj.SurveyHelpers : ''
        this.Model = obj.Model != null ? obj.Model : ''
        this.Userid = obj.Userid != null ? obj.Userid : 0
    }
}