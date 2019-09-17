import React , { Component } from 'react'
import { Button } from 'antd'
import 'antd/es/style/index.css'


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
            </div>
        )
    }
    logout = ()=>{
        localStorage.token = ""
        this.props.history.push('/')
    }
}

export default B