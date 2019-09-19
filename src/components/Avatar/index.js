import React , { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
import { Avatar , Menu , Dropdown , Icon } from 'antd'
import { fakeAuth } from '../../utils/fakeAuth'
import './index.css'

class Avatars extends Component{
  render(){
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/">
            <Icon type="user" />
            <span className="label">个人中心</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/c">
            <Icon type="setting" />
            <span className="label">个人设置</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <div>
            <Icon type="home" />
            <span className="label" onClick={this.logout}>退出登录</span>
          </div>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="userInfo">
        <Dropdown overlay={menu} placement="bottomCenter" className="dropMenu" >
          <Avatar icon="user" style={{ backgroundColor: '#87d068' }}  size="large" />
        </Dropdown>
      </div>
    )
  }
  logout=()=>{
    fakeAuth.signOut()
    this.props.history.push('/login')
  }
}


export default withRouter(Avatars)