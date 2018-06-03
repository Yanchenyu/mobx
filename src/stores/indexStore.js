import { action } from 'mobx';
import todoListStore from './todoListStore'

class IndexStore {
    @action changeName = () => {
        todoListStore.user = 'Cindy' + Math.random()
    }
}

export default new IndexStore()
