import {connect} from 'react-redux';
import TodoItem from "../components/TodoItem";
import {deleteTask, markTaskDone} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => {dispatch(deleteTask(taskId))},
    markTaskDone: (taskId) => {dispatch(markTaskDone(taskId))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;