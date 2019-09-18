import React , { Component } from 'react'
// import { Button } from 'antd'
// import 'antd/es/button/style/index.css'
import { Redirect } from 'react-router-dom'
import { fakeAuth } from '../../utils/fakeAuth'
import LoginForm from './index'

class Login extends Component{
    render(){
        return (
            fakeAuth.authenticate()?(<Redirect to="/"/>):(<LoginForm />)
        )
    }
}


export default Login