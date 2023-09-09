import "./styles.css";
import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { dataManager } from "./data-manager.js";
import { domManager } from "./dom-handler.js";

const allTasks = taskManager.masterTaskList;
const allProjects = projectManager.masterProjectList;

taskManager.makeTaskId();
taskManager.sortTasks();
domManager.loadProjectOptions();
domManager.renderMenuOptions();
taskManager.setDueDate();
domManager.renderProjects();

console.log(allTasks, allProjects);
