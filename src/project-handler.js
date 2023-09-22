import { v4 as uuidv4 } from "uuid";

export const projectManager = (function () {
  let masterProjectList = [
    {
      projectName: "Default Project",
    },
    {
      projectName: "Kenny Winker's Tasks",
    },
  ];

  if (localStorage.getItem("projects")) {
    let projectList = localStorage.getItem("projects");
    projectList = JSON.parse(projectList);
    masterProjectList = JSON.parse(JSON.stringify(projectList));
  }

  function createNewProject(projectName) {
    return {
      projectName,
    };
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

  return {
    masterProjectList,
    createNewProject,
    makeProjectId,
    makeNewProjectId,
  };
})();
