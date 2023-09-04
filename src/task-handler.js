export const taskManager = (function () {

    const masterTaskList = [
        {
            taskName: "Go potty",
            priority: "High",
            dueDate: "12/31/2023",
            project: "Default Project",
            complete: false,
            id: 0
        },
        {
            taskName: "Something else",
            priority: "Medium",
            dueDate: "9/10/2023",
            project: "Another Project",
            complete: false,
            id: 1
        }
    ];

    function createNewTask(taskName, priority, dueDate, project, complete = false) {
        return {
            taskName,
            priority,
            dueDate,
            project,
            complete
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
