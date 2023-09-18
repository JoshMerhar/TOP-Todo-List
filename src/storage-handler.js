import { taskManager } from "./task-handler.js";

export const storageManager = (function () {
    
    let allStoredTasks = [];
    fetchTasks();

    function fetchTasks() {
        if (!localStorage.getItem("tasks")) {
            populateStorage();
        } else {
            let taskList = localStorage.getItem("tasks");
            taskList = JSON.parse(taskList);
            allStoredTasks = JSON.parse(JSON.stringify(taskList));
            console.log(allStoredTasks);
            return allStoredTasks;
        }
    }

    function populateStorage() {
        allStoredTasks = JSON.parse(JSON.stringify(taskManager.masterTaskList));
        localStorage.setItem("tasks", JSON.stringify(allStoredTasks));
        console.log(allStoredTasks);
    }

    return { allStoredTasks, fetchTasks, populateStorage }
})();
