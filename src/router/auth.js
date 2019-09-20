import React , { Component } from 'react' 
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom'
// import componentA from '../views/a'
// import componentB from '../views/b'
// import componentC from '../views/c'
// 404页面
import NotFound from '../views/404'

import Header from '../components/layouts/Header'
import {defaultRouter , asyncRouter} from  './config'




class AppRouter extends Component{
    constructor(props){
        // let token = localStorage.token
        super(props)
    }
    render(){
       let routes = defaultRouter.concat(asyncRouter)
        return (
            <Router>
                <div>
                    <Header routes={routes}  />
                    <Switch>
                    {
                        routes.map((item,index)=>{
                            return (
                               <Route key = {index}  exact path = {item.path}  render={props=>{
                                //    console.log(props)
                                    return item.auth?(
                                        localStorage.token? <item.component  {...props} />: <Redirect to={{
                                            pathname:'/login',
                                            state: { from: props.location }
                                        }} />
                                    ):(
                                        <item.component {...props} />
                                    )
                               }} />
                            )
                        })
                    }
                        <Route component = {NotFound} />
                    </Switch>
                </div>    
            </Router>
        )   
    }

}

export default AppRouter