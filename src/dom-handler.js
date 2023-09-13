import { taskManager } from "./task-handler.js";
import { projectManager } from "./project-handler.js";
import { dataManager } from "./data-manager.js";

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

    const editTaskForm = document.querySelector("#edit-task-form-container");

    const closeFormButtons = document.querySelectorAll(".close-form");
    closeFormButtons.forEach(closeFormButton => closeFormButton.addEventListener("click", () => {
        newTaskForm.style.display = "none";
        newProjectForm.style.display = "none";
        editTaskForm.style.display = "none";
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
                                <div class="manage-task-status">
                                    <div class="task-status">${allTasks[i].completed}</div>
                                    <button class="change-status-button">Change status</button>
                                </div>
                                <div class="task-action-buttons">
                                    <button class="delete-task-button">Delete task</button>
                                    <button class="edit-task-button">Edit task</button>
                                </div>
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

        const changeStatusButtons = document.querySelectorAll(".change-status-button");
        changeStatusButtons.forEach((changeStatusButton) => {
            changeStatusButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                changeTaskStatus(taskId);
            });
        });
        const deleteTaskButtons = document.querySelectorAll(".delete-task-button");
        deleteTaskButtons.forEach((deleteTaskButton) => {
            deleteTaskButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                deleteTask(taskId);
            });
        });
        const editTaskButtons = document.querySelectorAll(".edit-task-button");
        editTaskButtons.forEach((editTaskButton) => {
            editTaskButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                dataManager.openEditForm(event, taskId);
            });
        });
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
            projectBlock.classList.add("project-block");
            projectTitle.innerHTML = 
                                `<div class="project-block-title">
                                    <div>${allProjects[i].projectName}</div>
                                    <button class="delete-project-button">Delete project</button>
                                </div>`
            projectBlock.appendChild(projectTitle);

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
        const deleteProjectButtons = document.querySelectorAll(".delete-project-button");
        deleteProjectButtons.forEach((deleteProjectButton, i) => {
            deleteProjectButton.addEventListener("click", () => deleteProject(i));
        })
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
                } else {
                    allTasks[i].completed = false;
                    taskStatus.textContent = "In progress";
                }
            }
        }  
    }
    
    function deleteTask(taskId) {
        let taskIndex;
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                taskIndex = i;
            } else {
                continue;
            }
        }
        allTasks.splice(taskIndex, 1);
        taskManager.makeTaskId();
        taskManager.sortTasks();
        renderTasks();
    }

    function deleteProject(projectId) {
        for (let i = allProjects[projectId].projectTasks.length - 1; i >= 0; i--) {
            allTasks.splice(allProjects[projectId].projectTasks[i].id, 1)
        }
        allProjects.splice(projectId, 1);
        taskManager.makeTaskId();
        taskManager.sortTasks();
        projectManager.makeProjectId();
        loadProjectOptions();
        renderMenuOptions();
        renderProjects();
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
            menuProject.classList.add("menu-project-name");
            menuProject.textContent = allProjects[i].projectName;
            menuOptions.appendChild(menuProject);
        }
        menuBlock.appendChild(menuOptions);

        const optionButtons = document.querySelectorAll(".menu-project-name");
        optionButtons.forEach((optionButton, i) => {
            optionButton.addEventListener("click", () => openProject(i));
        })
    }

    function openProject(projectId) {
        mainDisplay.innerHTML = "";
        const projectBlock = document.createElement("div");
        const projectTitle = document.createElement("div");
        projectBlock.classList.add("project-block");
        projectTitle.innerHTML = 
                            `<div class="project-block-title">
                                <div>${allProjects[projectId].projectName}</div>
                            </div>`
        projectBlock.appendChild(projectTitle);
        for (let i = 0; i < allProjects[projectId].projectTasks.length; i++) {
            const taskNode = document.createElement("div");
            const taskId = allProjects[projectId].projectTasks[i].id;
            console.log(taskId);

            taskNode.innerHTML =
                            `<div class="task-node" data-task-id="${taskId}">
                                <div class="name-and-description">
                                    <div><b>${allProjects[projectId].projectTasks[i].taskName}</b></div>
                                    <div class="task-node-description">${allProjects[projectId].projectTasks[i].description}</div>
                                </div>
                                <div><b>Due</b>: ${allProjects[projectId].projectTasks[i].dueDate}</div>
                                <div><b>Priority</b>: ${allProjects[projectId].projectTasks[i].priority}</div>
                                <div class="manage-task-status">
                                    <div class="task-status">${allProjects[projectId].projectTasks[i].completed}</div>
                                    <button class="change-status-button">Change status</button>
                                </div>
                                <div class="task-action-buttons">
                                    <button class="delete-task-button">Delete task</button>
                                    <button class="edit-task-button">Edit task</button>
                                </div>
                            </div>`;
            projectBlock.appendChild(taskNode);

            const taskStatus = taskNode.querySelector(".task-status");
            if (allProjects[projectId].projectTasks[i].completed === false) {
                taskStatus.innerHTML = "In progress";
            } else {
                taskStatus.innerHTML = "Completed";
            }

            if (allProjects[projectId].projectTasks[i].priority === "High") {
                taskNode.style.backgroundColor = "orangered";
            } else if (allProjects[projectId].projectTasks[i].priority === "Medium") {
                taskNode.style.backgroundColor = "rgb(255, 238, 0)";
            } else if (allProjects[projectId].projectTasks[i].priority === "Low") {
                taskNode.style.backgroundColor = "rgb(96, 214, 0)";
            }
        }
        mainDisplay.appendChild(projectBlock);
        loadEditFormProjectOptions();

        const changeStatusButtons = document.querySelectorAll(".change-status-button");
        changeStatusButtons.forEach((changeStatusButton) => {
            changeStatusButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                changeTaskStatus(taskId);
            });
        });
        const deleteTaskButtons = document.querySelectorAll(".delete-task-button");
        deleteTaskButtons.forEach((deleteTaskButton) => {
            deleteTaskButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                deleteTask(taskId);
            });
        });
        const editTaskButtons = document.querySelectorAll(".edit-task-button");
        editTaskButtons.forEach((editTaskButton) => {
            editTaskButton.addEventListener("click", (event) => {
                const taskId = event.target.closest(".task-node").getAttribute("data-task-id");
                dataManager.openEditForm(event, taskId);
            });
        });
    }

    const showAllProjectsButton = document.querySelector("#display-projects-button");
    showAllProjectsButton.addEventListener("click", renderProjects);

    const showAllTasksButton = document.querySelector("#display-tasks-button");
    showAllTasksButton.addEventListener("click", renderTasks);

    return { resetProjectForm, resetTaskForm, resetEditForm, loadProjectOptions, renderTasks, renderProjects, renderMenuOptions, openProject };
})();
