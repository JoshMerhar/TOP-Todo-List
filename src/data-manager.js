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
            domManager.renderMenuOptions();
            domManager.renderProjects();
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
            taskManager.setDueDate();
            domManager.renderProjects();
            console.log(allTasks, allProjects);
        } else {
            alert("Please fill out all fields.");
            return;
        }
    }

    function openEditForm(event, taskId) {
        event.preventDefault();
        const editTaskForm = document.querySelector("#edit-task-form-container");
        editTaskForm.style.display = "block";
        const submitEditButton = document.querySelector("#submit-edit-form");
        submitEditButton.removeEventListener("click", submitEditChanges);

        function submitEditChanges(event) {
            event.preventDefault();
            const taskName = document.querySelector("#edit-task-name").value;
            if (taskName !== "") {
                allTasks[taskId].taskName = taskName;
            } else {
                allTasks[taskId].taskName = allTasks[taskId].taskName;
            }

            const description = document.querySelector("#edit-task-description").value;
            if (description !== "") {
                allTasks[taskId].description = description;
            } else {
                allTasks[taskId].description = allTasks[taskId].description;
            }

            const priority = document.querySelector("#edit-task-priority").value;
            if (priority !== "") {
                allTasks[taskId].priority = priority;
            } else {
                allTasks[taskId].priority = allTasks[taskId].priority;
            }

            const dueDate = document.querySelector("#edit-task-due-date").value;
            if (dueDate) {
                allTasks[taskId].dueDate = dueDate;
            } else {
                allTasks[taskId].dueDate = allTasks[taskId].dueDate;
            }

            const project = document.querySelector("#edit-task-project-select").value;
            if (project !== "") {
                allTasks[taskId].project = project;
            } else {
                allTasks[taskId].project = allTasks[taskId].project;
            }
            // Something around here is still a little funky...
            let projectId;
            for (let i = 0; i < allProjects.length; i++) {
                if (allTasks[taskId].project === allProjects[i].projectName) {
                    projectId = allProjects[i].id;
                }
            }
            taskManager.sortTasks();
            domManager.openProject(projectId);
            submitEditButton.removeEventListener("click", submitEditChanges);
            domManager.resetEditForm();
        }
        submitEditButton.addEventListener("click", submitEditChanges);
    }

    const submitProjectButton = document.querySelector("#submit-project");
    submitProjectButton.addEventListener("click", submitProjectForm);

    const submitTaskButton = document.querySelector("#submit-task");
    submitTaskButton.addEventListener("click", submitTaskForm);

    return { submitProjectForm, submitTaskForm, openEditForm };
})(); 