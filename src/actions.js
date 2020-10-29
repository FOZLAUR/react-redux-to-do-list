export const addTask = (task) => {
  return {type: "ADD_TASK", payload: task}
};

export const initTaskList = tasks => ({
    type: 'INIT_TASK_LIST',
    payload: tasks
});

export const deleteTask = (id) => {
  return {type: "DELETE_TASK", payload: id}
};

export const markTaskDone = (id) => {
  return {type: "DONE_TASK", payload: id}
};

