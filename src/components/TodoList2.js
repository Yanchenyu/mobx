import React, { Component, PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class TodoList extends Component {
    render() {
        console.log('TodoList render')
        return (
            <div>
                <List /> 
                <Index />
                <UserName />
                <Btn />
            </div>
        )
    }
}

@inject('todoListStore')
@observer
class List extends Component {
    render() {
        console.log('List render')
        return (
            <ul>
                {
                    this.props.todoListStore.todos.map((item, index) => {
                        return (
                            <li key={item + index}>
                                <h3>name: {item.name}</h3>
                                <h3>age: {item.age}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

@inject('indexStore')
class Index extends Component {
    handleClick = () => this.props.indexStore.changeName();
    render() {
        console.log('Index render')
        return (
            <div>
                <button onClick={this.handleClick}>点我也能切换姓名</button>
            </div>
        )
    }
}

@inject('todoListStore')
@observer
class UserName extends Component {
    render() {
        return (
            <h1>{this.props.todoListStore.user}</h1>
        )
    }
}

@inject('todoListStore')
class Btn extends Component {
    render() {
        return (
            <button onClick={this.props.todoListStore.changeUser}>点我切换姓名</button>
        )
    }
}
