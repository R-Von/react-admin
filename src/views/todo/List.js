import React , { Component } from 'react'


class List extends Component{

  render(){
    console.log(this.props)
    let { todoList } = this.props
    console.log(todoList)
   return (
      <div>
        <p>todoList的length是 {todoList.length}</p>
        <p>todoList的length是 {this.props.todoList.length}</p>

      </div>
   )
  }
}


export default List