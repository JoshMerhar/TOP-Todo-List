import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { domManager } from "./dom-handler.js";

export const dataManager = (function () {
    const allTasks = taskManager.masterTaskList;
    const allProjects = projectManager.masterProjectList;

    function sortTasks() {
        for (let i = 0; i < allProjects.length; i++) {
            allProjects[i].projectTasks = [];
            for (let j = 0; j < allTasks.length; j++) {
                if (allTasks[j].project === allProjects[i].projectName) {
                    allProjects[i].projectTasks.push(allTasks[j]);
                } else {
                    continue;
                }
            }
        }
        return;
    }

    function submitProjectForm(event) {
        event.preventDefault();
        const projectName = document.querySelector("#project-name").value;
        if (projectName !== "") {
            const newProject = projectManager.createNewProject(projectName);
            allProjects.push(newProject);
            projectManager.makeProjectId();
            sortTasks();
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
        const priority = document.querySelector("#task-priority").value;
        const dueDate = document.querySelector("#task-due-date").value;
        const project = document.querySelector("#task-project-select").value;
        if (taskName !== "" && priority !== "" && dueDate !== "" && project !== "") {
            const newTask = taskManager.createNewTask(taskName, priority, dueDate, project);
            allTasks.push(newTask);
            taskManager.makeTaskId();
            sortTasks();
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

    return { sortTasks, submitProjectForm, submitTaskForm };
})(); 