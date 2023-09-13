export const projectManager = (function () {
    
    const masterProjectList = [
        {
            projectName: "Default Project",
            projectTasks: [],
        },
        {
            projectName: "Kenny Winker's Tasks",
            projectTasks: [],
        }
    ];
    
    function createNewProject(projectName, projectTasks = []) {
        return {
            projectName,
            projectTasks,
        }
    }

    function makeProjectId() {
        if (masterProjectList.length > 0) {
            for (let i = 0; i < masterProjectList.length; i++) {
                masterProjectList[i].projectId = i;
            }
        }
        return;
    }

    return { masterProjectList, createNewProject, makeProjectId }
})();