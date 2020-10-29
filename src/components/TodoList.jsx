import React, {Component} from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import { PageHeader } from 'antd';

class TodoList extends Component {

    render() {
        return (
            <div>
                <PageHeader className="site-page-header" title="TodoList"/>
                <TodoGeneratorContainer />
                <TodoGroupContainer />
            </div>
        );
    }
}



export default TodoList;