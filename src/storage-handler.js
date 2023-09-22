import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";

export const storageManager = (function () {
  let allStoredTasks = [];
  let allStoredProjects = [];
  fetchTasks();

  function fetchTasks() {
    if (!localStorage.getItem("tasks")) {
      populateStorage();
    } else {
      let taskList = localStorage.getItem("tasks");
      taskList = JSON.parse(taskList);
      allStoredTasks = JSON.parse(JSON.stringify(taskList));

      let projectList = localStorage.getItem("projects");
      projectList = JSON.parse(projectList);
      allStoredProjects = JSON.parse(JSON.stringify(projectList));
    }
  }

  function populateStorage() {
    allStoredTasks = JSON.parse(JSON.stringify(taskManager.masterTaskList));
    localStorage.setItem("tasks", JSON.stringify(allStoredTasks));

    allStoredProjects = JSON.parse(
      JSON.stringify(projectManager.masterProjectList),
    );
    localStorage.setItem("projects", JSON.stringify(allStoredProjects));
  }

  return { allStoredTasks, allStoredProjects, fetchTasks, populateStorage };
})();
