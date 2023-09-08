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

    function renderTaskHeaders() {
        const taskHeadersRow = document.createElement("div");
        taskHeadersRow.innerHTML = 
                            `<div class="task-headers-row">
                                <div>Task</div>
                                <div>Due Date</div>
                                <div>Priority</div>
                                <div>Project</div>
                                <div>Status</div>
                            </div>`;

        mainDisplay.appendChild(taskHeadersRow);
    }

    function renderTasks() {
        mainDisplay.innerHTML = "";
        renderTaskHeaders();
        for (let i = 0; i < allTasks.length; i++) {
            const taskNode = document.createElement("div");

            taskNode.innerHTML =
                            `<div class="task-node" data-task-id="${allTasks[i].id}">
                                <div class="name-and-description">
                                    <div>${allTasks[i].taskName}</div>
                                    <div class="task-node-description">${allTasks[i].description}</div>
                                </div>
                                <div>${allTasks[i].dueDate}</div>
                                <div>${allTasks[i].priority}</div>
                                <div>${allTasks[i].project}</div>
                                <div class="task-status">${allTasks[i].completed}</div>
                                <div class="task-action-buttons">
                                    <button class="change-status-button">Change status</button>
                                    <button class="delete-task-button">Delete task</button>
                                </div>
                            </div>`
            mainDisplay.appendChild(taskNode);

            if (allTasks[i].priority === "High") {
                taskNode.style.backgroundColor = "red";
            } else if (allTasks[i].priority === "Medium") {
                taskNode.style.backgroundColor = "yellow";
            } else if (allTasks[i].priority === "Low") {
                taskNode.style.backgroundColor = "green";
            }
        }

        const changeStatusButtons = document.querySelectorAll(".change-status-button");
        changeStatusButtons.forEach((changeStatusButton) => {
            changeStatusButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                changeTaskStatus(taskId);
            });
        });
        const deleteTaskButtons = document.querySelectorAll(".delete-task-button");
        deleteTaskButtons.forEach((deleteTaskButton, i) => {
            deleteTaskButton.addEventListener("click", () => deleteTask(i));
        });
    }

    function renderProjects() {
        mainDisplay.innerHTML = "";
        for (let i = 0; i < allProjects.length; i++) {
            const projectBlock = document.createElement("div");
            const projectTitle = document.createElement("div");
            projectBlock.classList.add("project-block");
            projectTitle.innerHTML = 
                                `<div class="project-block-title">
                                    <div>${allProjects[i].projectName}</div>
                                </div>`
            projectBlock.appendChild(projectTitle);

            for (let j = 0; j < allProjects[i].projectTasks.length; j++) {
                const taskNode = document.createElement("div");

                taskNode.innerHTML =
                                `<div class="project-task-node">
                                    <div>${allProjects[i].projectTasks[j].taskName}</div>
                                    <div><b>Due:</b> ${allProjects[i].projectTasks[j].dueDate}</div>
                                    <div><b>Priority:</b> ${allProjects[i].projectTasks[j].priority}</div>
                                </div>`;
                projectBlock.appendChild(taskNode);

                if (allProjects[i].projectTasks[j].priority === "High") {
                    taskNode.style.backgroundColor = "red";
                } else if (allProjects[i].projectTasks[j].priority === "Medium") {
                    taskNode.style.backgroundColor = "yellow";
                } else if (allProjects[i].projectTasks[j].priority === "Low") {
                    taskNode.style.backgroundColor = "green";
                }
            }
            mainDisplay.appendChild(projectBlock);
        }
    }

    function changeTaskStatus(taskId) {
        const taskStatus = document.querySelector(`[data-task-id="${taskId}"] .task-status`);
        if (allTasks[taskId].completed === false) {
            allTasks[taskId].completed = true;
            taskStatus.textContent = "Completed";
        } else {
            allTasks[taskId].completed = false;
            taskStatus.textContent = "In progress";
        }
        console.log(allTasks);
        return allTasks;
    }
    
    function deleteTask(taskId) {
        allTasks.splice(taskId, 1);
        taskManager.makeTaskId();
        taskManager.sortTasks();
        renderTasks();
        console.log(allTasks);
    }

    const showAllProjectsButton = document.querySelector("#display-projects-button");
    showAllProjectsButton.addEventListener("click", renderProjects);

    const showAllTasksButton = document.querySelector("#display-tasks-button");
    showAllTasksButton.addEventListener("click", renderTasks);

    return { resetProjectForm, resetTaskForm, loadProjectOptions, renderTasks, renderProjects };
})();
