import React , { Component } from 'react'

class C extends Component{
    constructor(props){
        super(props)
        console.log('this is c')
        console.log(this.props)
    }
    render(){
        // console.log('this is c')
        // console.log(this.props)
        return (
            <div>C</div>
        )
    }
}

export default C