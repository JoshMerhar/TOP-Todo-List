import { projectManager } from "./project-handler.js";

export const taskManager = (function () {
    const allProjects = projectManager.masterProjectList; 
    
    const masterTaskList = [
        {
            taskName: "Go potty",
            description: "Do I really need to describe what I need to do here?",
            priority: "High",
            dueDate: "9/10/2023",
            project: "Default Project",
            completed: false,
        },
        {
            taskName: "Something else",
            description: "",
            priority: "Medium",
            dueDate: "12/31/2023",
            project: "Default Project",
            completed: false,
        },
        {
            taskName: "Digest Stallone cuts",
            description: "Pray this wretched bolus passes with ease.",
            priority: "Low",
            dueDate: "Whenever",
            project: "Kenny Winker's Tasks",
            completed: false,
        }
    ];

    function createNewTask(taskName, description, priority, dueDate, project, completed = false) {
        return {
            taskName,
            description,
            priority,
            dueDate,
            project,
            completed
        }
    }

    function makeTaskId() {
        if (masterTaskList.length > 0) {
            for (let i = 0; i < masterTaskList.length; i++) {
                masterTaskList[i].id = i;
            }
        }
        return;
    }

    function sortTasks() {
        for (let i = 0; i < allProjects.length; i++) {
            allProjects[i].projectTasks = [];
            for (let j = 0; j < masterTaskList.length; j++) {
                if (masterTaskList[j].project === allProjects[i].projectName) {
                    allProjects[i].projectTasks.push(masterTaskList[j]);
                } else {
                    continue;
                }
            }
        }
        return;
    }

    return { masterTaskList, createNewTask, makeTaskId, sortTasks }
})();
