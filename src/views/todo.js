import React , { Component } from 'react'
// import { observable , action , computed } from 'mobx'
import { observer } from 'mobx-react'
import { Button } from 'antd'

// class Store{
//   @observable timer = 0
//   //@observable可以在实例字段和属性getter上使用 对于对象的哪部分需要成为可观测的
//   @computed get doubleTimer(){
//     return this.timer*2
//   }
//   //@computed可以根据现有状态或其他计算值衍生的值 可以在任意类属性的getter上使用@computed来声明式的创建计算属性
//   @action.bound add(){
//     this.timer++
//   }
//   //@action 用来修改observables状态
// }

//@observer mobx与react结合的桥梁
@observer
class Todo extends Component{
  render(){
    console.log(this.props.store)

    const { doubleTimer , add , timer } = this.props.store
    return (
      <div>
        {/* TodoList */}
        <p>{timer}</p>
        <p>{doubleTimer}</p>
        <Button onClick={()=>add()}>+</Button>
      </div>
    )
  }
}

export default Todo