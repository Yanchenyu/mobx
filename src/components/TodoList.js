import React, { Component, PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('todoListStore')
@withRouter
@observer
export default class TodoList extends Component {
    handleClick = () => this.props.history.push('login');
    render() {
        console.log('TodoList render')
        return (
            <div>
                <h2 onClick={this.handleClick}>back login</h2>
                <button onClick={this.props.todoListStore.changeUser}>点我切换姓名</button>
                <h1>{this.props.todoListStore.user}</h1>
                <List todos={this.props.todoListStore.todos} /> 
                <Index />
            </div>
        )
    }
}

class List extends PureComponent {
    render() {
        console.log('List render')
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
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
@observer
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
