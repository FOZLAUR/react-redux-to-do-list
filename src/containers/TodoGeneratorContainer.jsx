import {connect} from 'react-redux';
import TodoGenerator from "../components/TodoGenerator";
import {addTask} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => {dispatch(addTask(task))}
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;