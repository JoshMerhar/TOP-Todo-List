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
            projectManager.makeNewProjectId();
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
            taskManager.makeNewTaskId();
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
        let taskIndex;
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                taskIndex = i;
            }
        }
        const editTaskForm = document.querySelector("#edit-task-form-container");
        editTaskForm.style.display = "block";
        const submitEditButton = document.querySelector("#submit-edit-form");
        submitEditButton.removeEventListener("click", submitEditChanges);

        function submitEditChanges(event) {
            event.preventDefault();
            const taskName = document.querySelector("#edit-task-name").value;
            if (taskName !== "") {
                allTasks[taskIndex].taskName = taskName;
            } else {
                allTasks[taskIndex].taskName = allTasks[taskIndex].taskName;
            }

            const description = document.querySelector("#edit-task-description").value;
            if (description !== "") {
                allTasks[taskIndex].description = description;
            } else {
                allTasks[taskIndex].description = allTasks[taskIndex].description;
            }

            const priority = document.querySelector("#edit-task-priority").value;
            if (priority !== "") {
                allTasks[taskIndex].priority = priority;
            } else {
                allTasks[taskIndex].priority = allTasks[taskIndex].priority;
            }

            const dueDate = document.querySelector("#edit-task-due-date").value;
            if (dueDate) {
                allTasks[taskIndex].dueDate = dueDate;
            } else {
                allTasks[taskIndex].dueDate = allTasks[taskIndex].dueDate;
            }
            
            const project = document.querySelector("#edit-task-project-select").value;
            if (project !== "") {
                allTasks[taskIndex].project = project;
            } else {
                allTasks[taskIndex].project = allTasks[taskIndex].project;
            }
            
            let projectId;
            for (let i = 0; i < allProjects.length; i++) {
                if (allTasks[taskIndex].project === allProjects[i].projectName) {
                    projectId = allProjects[i].projectId;
                }
            }
            taskManager.sortTasks();
            taskManager.setDueDate();
            submitEditButton.removeEventListener("click", submitEditChanges);
            domManager.resetEditForm();
            domManager.openProject(projectId);
        }
        submitEditButton.addEventListener("click", submitEditChanges);
    }

    const submitProjectButton = document.querySelector("#submit-project");
    submitProjectButton.addEventListener("click", submitProjectForm);

    const submitTaskButton = document.querySelector("#submit-task");
    submitTaskButton.addEventListener("click", submitTaskForm);

    return { submitProjectForm, submitTaskForm, openEditForm };
})(); 