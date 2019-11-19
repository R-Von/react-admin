import React , { Component } from 'react'
import { observer , Provider } from 'mobx-react'
import store from '../store/index'
import DataList from './DataList'

@observer
class TodoList extends Component{
  render(){
    return (
      <Provider store={store}>
        <DataList />
      </Provider>
    )
  }
}


export default TodoList