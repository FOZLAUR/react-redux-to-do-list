import React, {Component} from 'react';
import {deleteTask, toggleTask} from "../apis/todos";
import { Button } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';
class TodoItem extends Component {

    markDone = () => {
        const taskId = this.props.todo.id;
        const taskStatus = this.props.todo.done;

        toggleTask(taskId, taskStatus).then(response => {
            this.props.markTaskDone(response.data.id);
        })
    };

    removeTask = () => {
        const taskId = this.props.todo.id;
        deleteTask(taskId).then(this.props.deleteTask(taskId));
    };

    render() {
        const style = {
            color: "#ffffff",
            textDecoration: this.props.todo.done ? 'line-through' : ''
        };
        return (
            <section>
                <Button type="primary" onClick={this.removeTask} icon={<UserDeleteOutlined/>}/>
                <Button type="danger" onClick={this.markDone}>
                    <span style={style}>{this.props.todo.text}</span>
                </Button>
            </section>

        );
    }
}

export default TodoItem;