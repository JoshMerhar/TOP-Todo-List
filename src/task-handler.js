export const taskManager = (function () {

    const masterTaskList = [
        {
            taskName: "Go potty",
            priority: "High",
            dueDate: "9/10/2023",
            project: "Default Project",
            completed: false,
            id: 0
        },
        {
            taskName: "Something else",
            priority: "Medium",
            dueDate: "12/31/2023",
            project: "Default Project",
            completed: false,
            id: 1
        }
    ];

    function createNewTask(taskName, priority, dueDate, project, completed = false) {
        return {
            taskName,
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

    return { masterTaskList, createNewTask, makeTaskId }
})();
