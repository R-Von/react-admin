import React , { Component } from 'react'
import { 
    BrowserRouter as Router , 
    Route , 
    Link , 
    Redirect , 
    withRouter 
} from 'react-router-dom'
// withRouter  在不是通过路由匹配渲染的组件中 将create-router的history,location,match三个对象传入props对象

//根据路由切换浏览器的title属性 对props.history 进行监听 切换路由的时候获取当前的路由路径 同时根据不同路由设置不同的标题



const fakeAuth = {
    isAuthenticated:false,   
    authenticate(cb){
        this.isAuthenticated = true
        setTimeout(cb,100)   //fake async
    },
    signout(cb){
        this.isAuthenticated = false
        setTimeout(cb,100)
    }
}

const AuthButton = withRouter(
    ({ history })=>{
        return fakeAuth.isAuthenticated ? (
            <p>
                Welcome! 
                <button 
                    onClick={()=>{
                        fakeAuth.signout(()=>{
                            history.push('/')
                        })
                    }}
                    >
                        Sign out
                </button>
            </p>
        ):(
            <p>You are not logged in.</p>
        )
    }
)

function Public(){
    return <h3>Public</h3>
}

function Protected(){
    return <h3>Protected</h3>
}

function PrivateRoute({component:Component,...rest}){
    return (
        <Route 
            {...rest}
            render={props=>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ):(
                    <Redirect 
                    to={{
                        pathname : '/login',
                        state : { from : props.location }
                    }}
                    />
                )
            }
        >
            
        </Route>
    )
}

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            redirectToReferrer:false
        }
    }

    login = ()=>{
        fakeAuth.authenticate(()=>{
            this.setState({redirectToReferrer:true})
        })
    }

    render(){
        let { from } = this.props.location.state || { from : { path: '/' } }
        let { redirectToReferrer } = this.state

        if(redirectToReferrer) return <Redirect to={from} />

        return (
            <div>
                <p>You must log in to view the page at { from.pathname } </p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }

}

function AuthExample(){
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public}></Route>
                <Route path="/login" component={Login}></Route>
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    )
}



export default AuthExample