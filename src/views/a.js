import React , { Component } from 'react'
import ComponentC from './c'
import { Route } from 'react-router-dom'


class A extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
                A子组件
                {/* <Route path="/a/c" exact component={ComponentC} /> */}
                {/* <ComponentC  /> */}
            </div>
        )
    }
}

export default A 