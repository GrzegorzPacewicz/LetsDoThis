export function appReducer(state, action) {
  if (action.type === "delete") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  }

  if (action.type === "finish") {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      ),
    };
  }

  if (action.type === "add") {
    return {
      isFormShown: false,
      tasks: [
        ...state.tasks,
        {
          id: Math.random(),
          task: action.newTask,
          done: false,
        },
      ],
    };
  }
  if (action.type === "open_form") {
    return {
      ...state,
      isFormShown: true,
    };
  }
}
