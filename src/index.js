import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
// stores
import authStore from './stores/authStore';
import todoListStore from './stores/todoListStore';
import indexStore from './stores/indexStore';
// components
import App from './components/App'
import { configure } from 'mobx';

const stores = {
    authStore,
    todoListStore,
    indexStore
}

configure({enforceActions: true});

render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
