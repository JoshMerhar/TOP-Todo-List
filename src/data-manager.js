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

    const newProjectButton = document.querySelector("#new-project-button");
    newProjectButton.addEventListener("click", () => {
        const newProject = projectManager.createNewProject("Another Project", []);
        allProjects.push(newProject);
        projectManager.makeProjectId();
        sortTasks();
        console.log(allTasks, allProjects);
    })

    function submitForm(event) {
        event.preventDefault();
        const taskName = document.querySelector("#task-name").value;
        const priority = document.querySelector("#task-priority").value;
        const dueDate = document.querySelector("#task-due-date").value;
        const project = document.querySelector("#task-project").value;
        const newTask = taskManager.createNewTask(taskName, priority, dueDate, project);
        allTasks.push(newTask);
        taskManager.makeTaskId();
        sortTasks();
        console.log(allTasks, allProjects);
    }

    const submitTaskButton = document.querySelector("#submit-task");
    submitTaskButton.addEventListener("click", submitForm);

    return { sortTasks, submitForm };
})(); 