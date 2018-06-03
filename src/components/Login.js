import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../styles/login.css';
import { withRouter } from 'react-router-dom';

@inject('authStore')
@withRouter
@observer
export default class Login extends Component {
    setUsername = (e) => this.props.authStore.setUsername(e.target.value);
    setPassword = (e) => this.props.authStore.setPassword(e.target.value);
    render() {
        return (
            <div>
                <input
                    className={`username ${this.props.authStore.isUsernameLegal ? 'illegal' : ''}`}
                    onChange={this.setUsername}
                    value={this.props.authStore.value.username}
                    placeholder='请输入用户名'
                    type='text'
                />
                <input
                    className={`password ${this.props.authStore.isPasswordLegal ? 'illegal' : ''}`}
                    onChange={this.setPassword}
                    value={this.props.authStore.value.password}
                    placeholder='请输入密码'
                    type='password'
                />
                <div>{this.props.authStore.value.password}</div>
                <button onClick={() => this.props.authStore.loginUser(this.props.authStore)}>登录</button>
            </div>
        )
    }
}
