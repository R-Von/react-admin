import React , { Component } from 'react'
import ComponentC from './c'


class A extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
                A子组件

                {/* <ComponentC  /> */}
            </div>
        )
    }
}

export default A 