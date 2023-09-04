export const projectManager = (function () {
    
    const masterProjectList = [
        {
            projectName: "Default Project",
            projectTasks: [],
            id: 0
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
                masterProjectList[i].id = i;
            }
        }
        return;
    }

    return { masterProjectList, createNewProject, makeProjectId }
})();