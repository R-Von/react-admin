import { observable } from 'mobx'
import  list  from './data'

class TodoList {
  @observable todos = []
}

export default new TodoList()