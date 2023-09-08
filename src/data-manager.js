import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { domManager } from "./dom-handler.js";

export const dataManager = (function () {
    const allTasks = taskManager.masterTaskList;
    const allProjects = projectManager.masterProjectList;

    function submitProjectForm(event) {
        event.preventDefault();
        const projectName = document.querySelector("#project-name").value;
        if (projectName !== "") {
            const newProject = projectManager.createNewProject(projectName);
            allProjects.push(newProject);
            projectManager.makeProjectId();
            taskManager.sortTasks();
            domManager.loadProjectOptions();
            domManager.resetProjectForm();
            console.log(allTasks, allProjects);
        } else {
            alert("Please fill out all fields.");
            return;
        }
    }

    function submitTaskForm(event) {
        event.preventDefault();
        const taskName = document.querySelector("#task-name").value;
        const description = document.querySelector("#task-description").value;
        const priority = document.querySelector("#task-priority").value;
        const dueDate = document.querySelector("#task-due-date").value;
        const project = document.querySelector("#task-project-select").value;
        if (taskName !== "" && priority !== "" && dueDate !== "" && project !== "") {
            const newTask = taskManager.createNewTask(taskName, description, priority, dueDate, project);
            allTasks.push(newTask);
            taskManager.makeTaskId();
            taskManager.sortTasks();
            domManager.resetTaskForm();
            domManager.renderTasks();
            console.log(allTasks, allProjects);
        } else {
            alert("Please fill out all fields.");
            return;
        }
    }

    const submitProjectButton = document.querySelector("#submit-project");
    submitProjectButton.addEventListener("click", submitProjectForm);

    const submitTaskButton = document.querySelector("#submit-task");
    submitTaskButton.addEventListener("click", submitTaskForm);    

    return { submitProjectForm, submitTaskForm };
})(); 