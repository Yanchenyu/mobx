import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Login from './Login'
import TodoList from './TodoList'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/todoList' component={TodoList}></Route>
            </Switch>
        )
    }
}