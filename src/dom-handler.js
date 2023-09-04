import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";

export const domManager = (function () {
    const allTasks = taskManager.masterTaskList;
    const allProjects = projectManager.masterProjectList;

    const newTaskForm = document.querySelector("#new-task-form-container");
    const newTaskButton = document.querySelector("#new-task-button");
    newTaskButton.addEventListener("click", () => newTaskForm.style.display = "block");

    function resetForm() {
        document.querySelector("#new-task-form").reset();
        newTaskForm.style.display = "none";
    }

    return { resetForm };
})();
