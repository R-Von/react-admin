import React , { Component } from 'react'
import { Button } from 'antd'
import 'antd/es/button/style/index.css'


class Login extends Component{
    constructor(props){
        super(props)
        // var nextPath = this.props.location.state?this.props.location.state.from.pathname:'/'
        // this.state = {
        //     nextTo:nextPath
        // }
    }
    render(){
        return (
            <div>
                <p>Login</p>
                <Button onClick={this.login}>Login</Button>
            </div>


        )
    }
    login = (e)=>{
        e.preventDefault()
        console.log(this.props)
        localStorage.token = 'n59sjme2dpw02'
        var nextPath = this.props.location.state?this.props.location.state.from.pathname:'/'
        console.log(nextPath)
        this.props.history.push(nextPath)
    }
}


export default Login