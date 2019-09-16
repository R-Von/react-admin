import React , { Component } from 'react'

class B extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>B</div>
        )
    }
}

export default B