import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { dataManager } from "./data-manager.js";
import { storageManager } from "./storage-handler.js";

export const domManager = (function () {
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

    const editTaskForm = document.querySelector("#edit-task-form-container");

    const closeFormButtons = document.querySelectorAll(".close-form");
    closeFormButtons.forEach(closeFormButton => closeFormButton.addEventListener("click", () => {
        resetProjectForm();
        resetTaskForm();
        resetEditForm();
    }))

    function resetProjectForm() {
        document.querySelector("#new-project-form").reset();
        newProjectForm.style.display = "none";
    }

    function resetTaskForm() {
        document.querySelector("#new-task-form").reset();
        newTaskForm.style.display = "none";
    }

    function resetEditForm() {
        document.querySelector("#edit-task-form").reset();
        editTaskForm.style.display = "none";
    }

    function loadProjectOptions() {
        const projectSelectOptions = document.querySelector("#task-project-select");
        projectSelectOptions.innerHTML = "";
        const blankSpace = document.createElement("option");
        blankSpace.textContent = "";
        blankSpace.value = "";
        projectSelectOptions.appendChild(blankSpace);
        for (let i = 0; i < allProjects.length; i++) {
            const projectOption = document.createElement("option");
            projectOption.textContent = allProjects[i].projectName;
            projectOption.value = allProjects[i].projectName;
            projectSelectOptions.appendChild(projectOption);
        }
    }

    function loadEditFormProjectOptions() {
        const projectSelectOptions = document.querySelector("#edit-task-project-select");
        projectSelectOptions.innerHTML = "";
        const blankSpace = document.createElement("option");
        blankSpace.textContent = "";
        blankSpace.value = "";
        projectSelectOptions.appendChild(blankSpace);
        for (let i = 0; i < allProjects.length; i++) {
            const projectOption = document.createElement("option");
            projectOption.textContent = allProjects[i].projectName;
            projectOption.value = allProjects[i].projectName;
            projectSelectOptions.appendChild(projectOption);
        }
    }

    function renderTaskHeaders() {
        const displayTitle = document.createElement("div");
        displayTitle.classList.add("main-display-title");
        displayTitle.textContent = "All Tasks";
        const taskHeadersRow = document.createElement("div");
        taskHeadersRow.innerHTML = 
                            `<div class="task-headers-row">
                                <div>Task</div>
                                <div>Due Date</div>
                                <div>Priority</div>
                                <div>Project</div>
                                <div>Status</div>
                            </div>`;
        mainDisplay.append(displayTitle, taskHeadersRow);
    }

    function renderTasks() {
        mainDisplay.innerHTML = "";
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-node-container");
        renderTaskHeaders();
        mainDisplay.appendChild(taskContainer);
        for (let i = 0; i < allTasks.length; i++) {
            const taskId = allTasks[i].id;
            const taskNode = document.createElement("div");
            taskNode.innerHTML =
                            `<div class="task-node" data-task-id="${taskId}">
                                <div class="name-and-description">
                                    <div><b>${allTasks[i].taskName}</b></div>
                                    <div class="task-node-description">${allTasks[i].description}</div>
                                </div>
                                <div>${allTasks[i].dueDate}</div>
                                <div>${allTasks[i].priority}</div>
                                <div>${allTasks[i].project}</div>
                                <div class="task-status">${allTasks[i].completed}</div>
                            </div>`;
            taskContainer.appendChild(taskNode);
            setTaskStatus(taskId);

            if (allTasks[i].priority === "High") {
                taskNode.style.backgroundColor = "orangered";
            } else if (allTasks[i].priority === "Medium") {
                taskNode.style.backgroundColor = "rgb(255, 238, 0)";
            } else if (allTasks[i].priority === "Low") {
                taskNode.style.backgroundColor = "rgb(96, 214, 0)";
            }
        }
        loadEditFormProjectOptions();
    }

    function renderProjects() {
        mainDisplay.innerHTML = "";
        const displayTitle = document.createElement("div");
        displayTitle.classList.add("main-display-title");
        displayTitle.textContent = "All Projects";
        mainDisplay.appendChild(displayTitle);
        for (let i = 0; i < allProjects.length; i++) {
            const projectBlock = document.createElement("div");
            const projectTitle = document.createElement("div");
            const projectId = allProjects[i].projectId;
            projectBlock.classList.add("project-block");
            projectTitle.innerHTML = 
                                `<div class="project-block-title" "data-project-id=${projectId}>
                                    <div>${allProjects[i].projectName}</div>
                                    <button class="delete-project-button">Delete project</button>
                                </div>`
            projectBlock.appendChild(projectTitle);
            const deleteButton = projectTitle.querySelector(".delete-project-button");
            deleteButton.addEventListener("click", () => deleteProject(projectId));

            for (let j = 0; j < allProjects[i].projectTasks.length; j++) {
                const taskNode = document.createElement("div");

                taskNode.innerHTML =
                                `<div class="project-task-node">
                                    <div><b>${allProjects[i].projectTasks[j].taskName}</b></div>
                                    <div><b>Due:</b> ${allProjects[i].projectTasks[j].dueDate}</div>
                                    <div><b>Priority:</b> ${allProjects[i].projectTasks[j].priority}</div>
                                    <div class="task-status"><b>Status:</b> ${allProjects[i].projectTasks[j].completed}</div>
                                </div>`;
                projectBlock.appendChild(taskNode);

                const taskStatus = taskNode.querySelector(".task-status");
                if (allProjects[i].projectTasks[j].completed === false) {
                    taskStatus.innerHTML = `<b>Status:</b> In progress`;
                } else {
                    taskStatus.innerHTML = `<b>Status:</b> Completed`;
                }

                if (allProjects[i].projectTasks[j].priority === "High") {
                    taskNode.style.backgroundColor = "orangered";
                } else if (allProjects[i].projectTasks[j].priority === "Medium") {
                    taskNode.style.backgroundColor = "rgb(255, 238, 0)";
                } else if (allProjects[i].projectTasks[j].priority === "Low") {
                    taskNode.style.backgroundColor = "rgb(96, 214, 0)";
                }
            }
            mainDisplay.appendChild(projectBlock);
        }
    }

    function setTaskStatus(taskId) {
        const taskStatus = document.querySelector(`[data-task-id="${taskId}"] .task-status`);
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                if (allTasks[i].completed === false) {
                    taskStatus.textContent = "In progress";
                } else {
                    taskStatus.textContent = "Completed";
                }
            } else {
                continue;
            }
        }
    }

    function changeTaskStatus(taskId) {
        const taskStatus = document.querySelector(`[data-task-id="${taskId}"] .task-status`);
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                if (allTasks[i].completed === false) {
                    allTasks[i].completed = true;
                    taskStatus.textContent = "Completed";
                    storageManager.fetchTasks();
                    storageManager.populateStorage();
                } else {
                    allTasks[i].completed = false;
                    taskStatus.textContent = "In progress";
                    storageManager.fetchTasks();
                    storageManager.populateStorage();
                }
            }
        }  
    }
    
    function deleteTask(taskId, projectId) {
        let taskIndex;
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                taskIndex = i;
                break;
            }
        }
        allTasks.splice(taskIndex, 1);
        taskManager.sortTasks();
        openProject(projectId);
        storageManager.fetchTasks();
        storageManager.populateStorage();
    }

    function deleteProject(projectId) {
        let projectIndex;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].projectId === projectId) {
                projectIndex = i;
                break;
            } 
        }

        const projectTasks = allProjects[projectIndex].projectTasks;
        for (let i = 0; i < projectTasks.length; i++) {
            const taskId = projectTasks[i].id;
            const taskIndex = allTasks.findIndex(task => task.id === taskId);
            allTasks.splice(taskIndex, 1);
        }

        allProjects.splice(projectIndex, 1);
        loadProjectOptions();
        renderMenuOptions();
        renderProjects();
        storageManager.fetchTasks();
        storageManager.populateStorage();
        console.log(allTasks, allProjects);
    }

    const menuOptions = document.querySelector("#project-names");

    function renderMenuOptions() {
        const menuBlock = document.querySelector("#menu-column");
        menuOptions.innerHTML = "";
        const menuProjectsTitle = document.createElement("div");
        menuProjectsTitle.classList.add("menu-projects-title");
        menuProjectsTitle.textContent = "Projects";
        menuOptions.appendChild(menuProjectsTitle);
        for (let i = 0; i < allProjects.length; i++) {
            const menuProject = document.createElement("div");
            const projectId = allProjects[i].projectId;
            menuProject.classList.add("menu-project-name");
            menuProject.textContent = allProjects[i].projectName;
            menuOptions.appendChild(menuProject);

            menuProject.addEventListener("click", () => {
                openProject(projectId);
            });
        }
        menuBlock.appendChild(menuOptions);
    }
    
    function openProject(projectId) {
        mainDisplay.innerHTML = "";
        let projectIndex;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].projectId === projectId) {
                projectIndex = i;
            } else {
                continue;
            }
        }
        const projectBlock = document.createElement("div");
        const projectTitle = document.createElement("div");
        projectBlock.classList.add("project-block");
        projectTitle.innerHTML = 
                            `<div class="project-block-title">
                                <div>${allProjects[projectIndex].projectName}</div>
                            </div>`
        projectBlock.appendChild(projectTitle);
        for (let i = 0; i < allProjects[projectIndex].projectTasks.length; i++) {
            const taskNode = document.createElement("div");
            const taskId = allProjects[projectIndex].projectTasks[i].id;

            taskNode.innerHTML =
                            `<div class="task-node" data-task-id="${taskId}">
                                <div class="name-and-description">
                                    <div><b>${allProjects[projectIndex].projectTasks[i].taskName}</b></div>
                                    <div class="task-node-description">${allProjects[projectIndex].projectTasks[i].description}</div>
                                </div>
                                <div><b>Due</b>: ${allProjects[projectIndex].projectTasks[i].dueDate}</div>
                                <div><b>Priority</b>: ${allProjects[projectIndex].projectTasks[i].priority}</div>
                                <div class="manage-task-status">
                                    <div class="task-status">${allProjects[projectIndex].projectTasks[i].completed}</div>
                                    <button class="change-status-button">Change status</button>
                                </div>
                                <div class="task-action-buttons">
                                    <button class="delete-task-button">Delete task</button>
                                    <button class="edit-task-button">Edit task</button>
                                </div>
                            </div>`;
            projectBlock.appendChild(taskNode);

            const taskStatus = taskNode.querySelector(".task-status");
            if (allProjects[projectIndex].projectTasks[i].completed === false) {
                taskStatus.innerHTML = "In progress";
            } else {
                taskStatus.innerHTML = "Completed";
            }

            if (allProjects[projectIndex].projectTasks[i].priority === "High") {
                taskNode.style.backgroundColor = "orangered";
            } else if (allProjects[projectIndex].projectTasks[i].priority === "Medium") {
                taskNode.style.backgroundColor = "rgb(255, 238, 0)";
            } else if (allProjects[projectIndex].projectTasks[i].priority === "Low") {
                taskNode.style.backgroundColor = "rgb(96, 214, 0)";
            }
        }
        mainDisplay.appendChild(projectBlock);
        loadEditFormProjectOptions();

    }

    mainDisplay.addEventListener("click", (event) => {
        const target = event.target;
    
        if (target.classList.contains("edit-task-button")) {
            const taskId = target.closest(".task-node").getAttribute("data-task-id");
            dataManager.openEditForm(event, taskId);
        } else if (target.classList.contains("change-status-button")) {
            const taskId = target.closest(".task-node").getAttribute("data-task-id");
            changeTaskStatus(taskId);
        } else if (target.classList.contains("delete-task-button")) {
            const taskId = target.closest(".task-node").getAttribute("data-task-id");
            deleteTask(taskId, projectId);
        }
    });

    const showAllProjectsButton = document.querySelector("#display-projects-button");
    showAllProjectsButton.addEventListener("click", renderProjects);

    const showAllTasksButton = document.querySelector("#display-tasks-button");
    showAllTasksButton.addEventListener("click", renderTasks);

    window.addEventListener("storage", storageManager.fetchTasks);

    return { resetProjectForm, resetTaskForm, resetEditForm, loadProjectOptions, renderTasks, renderProjects, renderMenuOptions, openProject };
})();
