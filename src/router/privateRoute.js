import React, {Component} from 'react'
import { Route , Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/fakeAuth'
import NProgress from 'nprogress'

class PrivateRoute extends Component{
    render(){
        
        let rests = this.props
        let Component = rests.component
        return(
            <Route rests
                render = {props =>{
                    document.title = rests.name?`${rests.name}--React Admin`:"React Admin"
                    return  fakeAuth.authenticate()?(rests.redirects?<Redirect to={{pathname:rests.redirects}} />:<Component {...props}/>):(
                        <Redirect to={{
                            pathname:'/login',
                            state:{
                                from:props.location
                            }
                        }} />
                    ) 
                }}
            />
        )
    }
    componentWillMount(){
        // console.log('PrivateRoute WillMount OnEnter')
        NProgress.start()
    }
    componentDidMount(){
        // console.log('PrivateRoute DidMount OnEnter')
        NProgress.done()
    }
   
}

export default PrivateRoute
