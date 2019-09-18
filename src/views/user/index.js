import React , { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { fakeAuth } from '../../utils/fakeAuth'
import Logo from '../../assets/images/logo.svg';
import Name from '../../assets/images/name.svg';
import './index.css'

class loginForm extends Component{
    render(){
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginWrap">
                <div className="contentWrap">
                    <div className="loginForm">
                        <div className="title">
                            <img src={Logo} className="logo" alt="Ant Design" />
                            <img src={Name} className="name" alt="Ant Design" />
                        </div>    
                        <div className="dataWrap">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                {/* <a className="login-form-forgot" href="">
                                    Forgot password
                                </a> */}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                {/* Or <a href="">register now!</a> */}
                                </Form.Item>
                            </Form>
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
    handleSubmit = e=>{
        e.preventDefault()
        // console.log(this.props)
        this.props.form.validateFields((err,values)=>{
            if(!err){
                fakeAuth.setToken('u8sh4kemao9k')
                this.props.history.push('/')
                message.success('登陆成功',1)
                return 
            }
        })
    }
}
const LoginForm = withRouter(Form.create({ name: 'loginForm' })(loginForm));

export default LoginForm