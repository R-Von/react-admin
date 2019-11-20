import React , { Component  } from 'react'
// import TodoList from './Todolist/TodoList'
// import First from './Context/first'
import mobx from 'mobx-react'
import TodoList from '../views/todo/TodoList'
import List from '../views/todo/List'


class C extends Component{
    constructor(props){
        super(props)
        // console.log('this is c')
        // console.log(this.props)
    }
    render(){
        return (
           <List todoList={TodoList} />
        )
    }
}

export default C