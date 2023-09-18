import "./styles.css";
import { storageManager } from "./storage-handler.js";
import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { domManager } from "./dom-handler.js";

const allTasks = storageManager.allStoredTasks;
const allProjects = storageManager.allStoredProjects;

if (!localStorage.getItem("tasks")) {
    taskManager.makeTaskId();
}
taskManager.setDueDate();
taskManager.sortTasks();
if (!localStorage.getItem("Projects")) {
    projectManager.makeProjectId();
}
domManager.loadProjectOptions();
domManager.renderMenuOptions();
domManager.renderProjects();

window.addEventListener("storage", (event) => {
    if (event.key === "tasks") {
        storageManager.fetchTasks();
    }
});

console.log(allTasks, allProjects);
