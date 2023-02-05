import { GetConnection } from '../Database/Database.js';
import { GLOBAL_CONFIG } from '../Configuration/Global.js';

// queries
const createNewProjectQuery = "INSERT INTO Projects VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";

const CreateNewProject = async projectDetail => {

    let isSuccess = false;
    let projectDetail;
    let message;

    if (GLOBAL_CONFIG.DB_MYSQL_ENABLE) {

        try {

            var connection = await GetConnection();
        
            let params = [
                projectDetail.Name, projectDetail.Location, projectDetail.Description, 
                projectDetail.SubDate, projectDetail.Reminder, projectDetail.ProjectType, 
                projectDetail.SurveyHelpers, projectDetail.Model, projectDetail.Userid 
            ];

            connection.query(createNewProjectQuery, params, (err, result, fields) => {

                if (err) {
                    message = 'something went wrong';
                    return;
                }

                if (result) {
                    projectDetail = request[0];
                    isSuccess = true;
                    message = '';
                }
            });

        } catch (err) {
            message = 'something went wrong';
        }

        return ({ isSuccess, projectDetail, message });

    } else {

        var connection = await GetConnection();
        var request = new connection.Request();

        try {
            
        } catch (err) {
            message = 'something went wrong';
        }
    }
}

export const projectService = { CreateNewProject }