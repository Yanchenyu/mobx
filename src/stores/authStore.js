import { observable, action, computed, autorun, runInAction, flow } from 'mobx';

class AuthStore {
    @observable value = {
        username: '',
        password: ''
    }

    @computed get isUsernameLegal() {
        return this.value.username.length > 5
    }

    @computed get isPasswordLegal() {
        return this.value.password.length > 5
    }

    state = {a: 1}

    @action setUsername = (val) => {
        this.value.username = val
    }

    @action setPassword = (val) => {
        this.value.password = val
    }

    // @action
    // loginUser = () => {
    //     setTimeout(() => {
    //         this.resetUser()
    //     }, 1000);
    // }

    // @action 
    // async loginUser(authStore) {
    //     let a = await new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve('hahahaha')
    //         }, 1000);
    //     });
        
    //     // this.resetUser(a);
    //     runInAction(() => {
    //         authStore.value.username = a
    //     })
    // }

    loginUser = flow(function * (authStore) {
        let a = yield new Promise((resolve) => {
            setTimeout(() => {
                resolve('hahahaha')
            }, 1000);
        });
        authStore.value.username = a
    });

    @action
    resetUser = () => {
        this.value.username = 'hahahahah'
    } 

    constructor() {
        autorun(() => {
            console.log(this.value.password)
        })
    }


}

export default new AuthStore()