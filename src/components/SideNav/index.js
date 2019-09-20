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
                      {/* 数据统计 */}
                      {item.name}
                    </span>
                  </Link>
                </Menu.Item>
              )
            })
          }
          {/* <Menu.Item key="1">
            <Link to="/dataCount">
              <Icon type="pie-chart" />
              <span className="navTitle"> 
                数据统计
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dataCenter">
              <Icon type="fund" />
              <span className="navTitle"> 
                数据组件
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/listPage">
              <Icon type="container" />
              <span className="navTitle"> 
                列表页
              </span>
            </Link>
          </Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item key="4">
              <Link to="/a">
                <Icon type="amazon" />
                <span className="navTitle"> 
                  组件A
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/b">
                <Icon type="behance" />
                <span className="navTitle"> 
                  组件B
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/c">
                <Icon type="copyright" />
                <span className="navTitle"> 
                  组件C
                </span>
              </Link>
            </Menu.Item>
          </SubMenu> */}
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
    // console.log(this)
    console.log('sidenav',this.props)
    console.log('asyncRouter',asyncRouter)
    // let pathname = this.

  }
}

export default withRouter(SiderNav)