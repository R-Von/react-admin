import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout , Menu , Icon } from 'antd'
import Logo from '../../assets/images/logo.svg'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu


class SiderNav extends Component{
  state = {
      collapsed: false,
  }

  toggle = ()=>{
      this.setState({
      collapsed:!this.state.collapsed
      })
  }

  render(){
    return (
      <Sider 
        breakpoint = "lg"
        collapsedWidth = "80"
        onBreakpoint = {broken => {
          console.log(broken)
        }}
        onCollapse = {(collapsed,type) => {
          console.log(collapsed,type)
        }}
      >
        <div className="logoIcon">
          <img src={Logo} alt="system" className="Icon" /> 
        </div>
        <Menu 
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1','sub2']}
          mode="inline"
          theme="dark"
          collapsed={this.state.collapsed.toString()}
        >
          <Menu.Item key="1">
            <Link to="/a">
              <Icon type="pie-chart" />
              <span className="navTitle"> 
                数据统计
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/b">
              <Icon type="desktop" />
              <span className="navTitle"> 
                数据组件
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/c">
              <Icon type="floder" />
              <span className="navTitle"> 
                Input输入组件
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SiderNav