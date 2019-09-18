import React , { Component } from 'react'
import { Layout } from 'antd'
import SiderNav from '../../components/SideNav'
import ContentMain from '../../components/ContentMain'

import { fakeAuth } from '../../utils/fakeAuth'
import './index.css'

const { Header, Content, Footer} = Layout


class Index extends Component{
    render(){
        return (
            <Layout>
                <SiderNav />
                {/* Index */}
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}  />
                    <Content style={{ margin: '24px 16px 0' }} >
                        <ContentMain />
                        <Footer style={{ textAlign: 'center'}} >admin system ©2019 Created by ANTD</Footer>
                    </Content>    
                </Layout>
            </Layout>
        )
    }
    handleClick = ()=>{
        fakeAuth.signOut()
        this.props.history.push('/login')
    }
}



export default Index