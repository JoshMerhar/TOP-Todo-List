import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";

export const domManager = (function () {
    const allTasks = taskManager.masterTaskList;
    const allProjects = projectManager.masterProjectList;

    const newProjectForm = document.querySelector("#new-project-form-container");
    const newProjectButton = document.querySelector("#new-project-button");
    newProjectButton.addEventListener("click", () => {
        newProjectForm.style.display = "block";
        newTaskForm.style.display = "none";
    })

    const newTaskForm = document.querySelector("#new-task-form-container");
    const newTaskButton = document.querySelector("#new-task-button");
    newTaskButton.addEventListener("click", () => {
        newTaskForm.style.display = "block";
        newProjectForm.style.display = "none";
    })

    const closeFormButtons = document.querySelectorAll(".close-form");
    closeFormButtons.forEach(closeFormButton => closeFormButton.addEventListener("click", () => {
        newTaskForm.style.display = "none";
        newProjectForm.style.display = "none";
    }))

    function resetProjectForm() {
        document.querySelector("#new-project-form").reset();
        newProjectForm.style.display = "none";
    }

    function resetTaskForm() {
        document.querySelector("#new-task-form").reset();
        newTaskForm.style.display = "none";
    }

    function loadProjectOptions() {
        const projectSelectOptions = document.querySelector("#task-project-select");
        projectSelectOptions.innerHTML = "";
        for (let i = 0; i < allProjects.length; i++) {
            const projectOption = document.createElement("option");
            projectOption.textContent = allProjects[i].projectName;
            projectOption.value = allProjects[i].projectName;
            projectSelectOptions.appendChild(projectOption);
        }
    }

    return { resetProjectForm, resetTaskForm, loadProjectOptions };
})();
