import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/fakeAuth'

const PrivateRoute = ({component:Component,...rest})=>{
    let rests = {...rest}
    return (
        <Route 
            rests
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


export default PrivateRoute
