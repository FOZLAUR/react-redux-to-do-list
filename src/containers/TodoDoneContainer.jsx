import {connect} from 'react-redux'
import TodoDone from '../components/TodoDone';

const mapStateToProps = state => {
    return {taskList: state.taskList.filter(taskList => taskList.done)}
};

const TodoDoneContainer = connect(mapStateToProps)(TodoDone);

export default TodoDoneContainer;