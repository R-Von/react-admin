import React , { Component } from 'react' 
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom'
// import componentA from '../views/a'
// import componentB from '../views/b'
// import componentC from '../views/c'
// 404页面
import NotFound from '../views/404'

import routes from  './config'




class AppRouter extends Component{
    
    render(){
        return (
            <Router>
                {/* <ul>
                    {
                         routes.map((item,index)=>{
                             return (
                                <li key={index}>
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                             )
                         })
                    }
                </ul> */}
                <Switch>
                    {
                        routes.map((item,index)=>{
                            return (
                               <Route key = {index} path = {item.path} exact render={props=>{
                                    return item.auth?(
                                        <Redirect to={{
                                            pathname:'/login',
                                            state: { from: props.location }
                                        }} />
                                    ):(
                                        <item.component />
                                    )
                               }} />
                            )
                        })
                    }
                    <Route component = {NotFound} />
                </Switch>
            </Router>
        )   
    }
}

export default AppRouter