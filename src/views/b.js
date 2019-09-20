import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import { Button } from 'antd'
import 'antd/es/style/index.css'
import ComponentC from './c'

class B extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
                B
                <Button onClick={this.logout}>退出登录</Button>
                <Route path="/ComC" component={ComponentC} />
            </div>
        )
    }
    logout = ()=>{
        localStorage.loginToken = ""
        this.props.history.push('/')
    }
}

export default B