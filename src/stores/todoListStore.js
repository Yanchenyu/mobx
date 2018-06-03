import { observable, action } from 'mobx';

class TodoListStore {
    @observable user = 'Yan';
    @observable todos = [{name: 'Abey', age: 12}, {name: 'Davi', age: 15}, {name: 'Stephen', age: 19}];

    @action changeUser = () => {
        this.user = 'Amy' + Math.random()
    }
}

export default new TodoListStore()
