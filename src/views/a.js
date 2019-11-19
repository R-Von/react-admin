import React , { Component } from 'react'
import Todo from './todo'
import { observable , action , computed } from 'mobx'
// import { observer } from 'mobx-react'


class Store {
    @observable timer = 0
    @computed get doubleTimer () {
        return this.timer * 2
    }
    @action.bound add () {
        this.timer ++
    }
}

  
class A extends Component{
    render(){
        return (
            <div>
                <Todo store={new Store()} />
            </div>
        )
    }
}

export default A 