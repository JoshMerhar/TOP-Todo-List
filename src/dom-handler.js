import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";

export const domManager = (function () {
    const mainContainer = document.querySelector("#content");
    const mainDisplay = document.querySelector("#main-display");

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

    function renderTasks() {
        mainDisplay.innerHTML = "";
        for (let i = 0; i < allTasks.length; i++) {
            const taskNode = document.createElement("div");
            const taskNameDiv = document.createElement("div");
            const dueDateDiv = document.createElement("div");
            const priorityDiv = document.createElement("div");
            const projectDiv = document.createElement("div");
            const completedDiv = document.createElement("div");
            taskNameDiv.textContent = allTasks[i].taskName;
            dueDateDiv.textContent = allTasks[i].dueDate;
            priorityDiv.textContent = allTasks[i].priority;
            projectDiv.textContent = allTasks[i].project;
            completedDiv.textContent = allTasks[i].completed;

            if (allTasks[i].priority === "High") {
                taskNode.style.backgroundColor = "red";
            } else if (allTasks[i].priority === "Medium") {
                taskNode.style.backgroundColor = "yellow";
            } else if (allTasks[i].priority === "Low") {
                taskNode.style.backgroundColor = "green";
            }

            taskNode.append(taskNameDiv, dueDateDiv, priorityDiv, projectDiv, completedDiv);
            taskNode.classList.add("task-node");
            mainDisplay.appendChild(taskNode);
        }
    }

    function renderProjects() {
        mainDisplay.innerHTML = "";
        for (let i = 0; i < allProjects.length; i++) {
            const projectBlock = document.createElement("div");
            const projectTitle = document.createElement("div");
            projectBlock.classList.add("project-block");
            projectTitle.textContent = allProjects[i].projectName;
            projectBlock.appendChild(projectTitle);

            for (let j = 0; j < allProjects[i].projectTasks.length; j++) {
                const taskNode = document.createElement("div");
                const taskNameDiv = document.createElement("div");
                const dueDateDiv = document.createElement("div");
                const priorityDiv = document.createElement("div");
                taskNode.classList.add("project-task-node");
                taskNameDiv.textContent = allProjects[i].projectTasks[j].taskName;
                dueDateDiv.textContent = allProjects[i].projectTasks[j].dueDate;
                priorityDiv.textContent = allProjects[i].projectTasks[j].priority;

                if (allProjects[i].projectTasks[j].priority === "High") {
                    taskNode.style.backgroundColor = "red";
                } else if (allProjects[i].projectTasks[j].priority === "Medium") {
                    taskNode.style.backgroundColor = "yellow";
                } else if (allProjects[i].projectTasks[j].priority === "Low") {
                    taskNode.style.backgroundColor = "green";
                }

                taskNode.append(taskNameDiv, dueDateDiv, priorityDiv);
                projectBlock.appendChild(taskNode);
            }
            mainDisplay.appendChild(projectBlock);
        }
    }

    const showAllProjectsButton = document.querySelector("#display-projects-button");
    showAllProjectsButton.addEventListener("click", renderProjects);

    const showAllTasksButton = document.querySelector("#display-tasks-button");
    showAllTasksButton.addEventListener("click", renderTasks);

    return { resetProjectForm, resetTaskForm, loadProjectOptions, renderTasks, renderProjects };
})();
