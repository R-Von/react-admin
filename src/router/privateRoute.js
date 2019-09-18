import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/fakeAuth'

const PrivateRoute = ({component:Component,...rest})=>{
    return (
        <Route 
            {...rest}
            render = {props =>
                fakeAuth.authenticate()?(<Component {...props} />):(
                    <Redirect to={{
                        pathname:'/login',
                        state:{
                            from:props.location
                        }
                    }} />
                )    
            }
        />
    )
}


export default PrivateRoute
