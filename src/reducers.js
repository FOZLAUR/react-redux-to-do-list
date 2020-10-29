import { combineReducers} from "redux";

const taskList = (state = [], action) => {
    if(action.type === "ADD_TASK"){
        return [...state, action.payload];
    }

    if(action.type === "INIT_TASK_LIST"){
        return action.payload;
    }

    if(action.type === "DELETE_TASK"){
        return state.filter(task=>task.id !== action.payload);
    }

    if(action.type === "DONE_TASK"){
        return state.map(task => task.id === action.payload ? { ...task, done: !task.done } : task);
    }
    return state;
};

export default combineReducers({
    taskList
})