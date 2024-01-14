export function getTasksNumber(tasks) {
    const numTasks = tasks.length;

    switch (true) {
        case numTasks >= 5:
            return `Zostało ${numTasks} zadań`;
        case numTasks > 1 && numTasks < 5:
            return `Zostały ${numTasks} zadania`;
        case numTasks === 1:
            return "Zostało 1 zadanie";
        default:
            return "I po robocie! 😎";
    }
}
