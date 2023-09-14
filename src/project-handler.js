import { v4 as uuidv4 } from "uuid";

export const projectManager = (function () {
    
    const masterProjectList = [
        {
            projectName: "Default Project",
        },
        {
            projectName: "Kenny Winker's Tasks",
        }
    ];
    
    function createNewProject(projectName) {
        return {
            projectName,
        }
    }

    function makeProjectId() {
        if (masterProjectList.length > 0) {
            for (let i = 0; i < masterProjectList.length; i++) {
                masterProjectList[i].projectId = uuidv4();
            }
        }
    }

    function makeNewProjectId() {
        const lastIndex = masterProjectList.length - 1;
        masterProjectList[lastIndex].projectId = uuidv4();
    }

    return { masterProjectList, createNewProject, makeProjectId, makeNewProjectId }
})();