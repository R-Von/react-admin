import React , { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
import { Layout , Menu , Icon } from 'antd'
import Logo from '../../assets/images/logo.svg'
import { asyncRouter } from '../../router/config'


const { Sider } = Layout
const { SubMenu } = Menu


class SiderNav extends Component{
  state = {
      collapsed: false,
      current:'1'
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
          selectedKeys={[this.state.current]}
          collapsed={this.state.collapsed.toString()}
          onClick={this.handleClick}
        >
          {
            asyncRouter.map((item,index)=>{
              return (
                <Menu.Item key={index}>
                  <Link to={item.path}>
                    <Icon type={item.icon} />
                    <span className="navTitle"> 
                      {item.name}
                    </span>
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  }
  componentDidMount(){
    let pathname = this.props.location.pathname
    let key = 0
    asyncRouter.forEach((item,index)=>{
      if(item.path===pathname){
        key = index
      }
    })
    this.setState({
      current:String(key)
    })
  }
}

export default withRouter(SiderNav)