import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import TodoGeneratorContainer from "./containers/TodoGeneratorContainer";
import TodoGroupContainer from "./containers/TodoGroupContainer";
import TodoDoneContainer from './containers/TodoDoneContainer';
import {getAllTaskList} from "./apis/todos";
import {initTaskList} from "./actions";
import {connect} from "react-redux";
import {Breadcrumb, Menu, BackTop} from 'antd';
import NotFound from "./components/NotFound";
import { HomeOutlined, ToTopOutlined } from '@ant-design/icons';


class App extends React.Component {
    componentDidMount() {
        getAllTaskList().then(response => {
            this.props.initTaskList(response.data);
        })
    }

    render() {
        const backToUp = {
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
        };

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/list">Pending</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/done">Done Tasks</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <React.Fragment>
                <header className="App-header">
                    <div style={{ height: '400vh', padding: 8 }}>
                    <BrowserRouter>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to="/"><HomeOutlined /> Home </Link></Breadcrumb.Item>
                            <Breadcrumb.Item overlay={menu}>
                                Filter
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <Switch>
                            <Route exact path="/" component={TodoList}></Route>
                            <Route exact path="/generator" component={TodoGeneratorContainer}></Route>
                            <Route exact path="/list" component={TodoGroupContainer}></Route>
                            <Route exact path="/done" component={TodoDoneContainer}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </BrowserRouter>
                        <BackTop>
                            <div style={backToUp}><ToTopOutlined /></div>
                        </BackTop>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    initTaskList: tasks => dispatch(initTaskList(tasks))
});

export default connect(null, mapDispatchToProps)(App);

