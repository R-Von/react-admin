import React , { Component } from 'react'
import { Button } from 'antd'
import { fakeAuth } from '../../utils/fakeAuth'


class Index extends Component{
    render(){
        return (
            <div>
                <p> Index </p>
                <Button type="primary" onClick={this.handleClick}>
                    退出登录
                </Button>
            </div>
        )
    }
    handleClick = ()=>{
        fakeAuth.signOut()
        this.props.history.push('/login')
    }
}



export default Index