import React from 'react'
import RouterGuard from './RouterGuard'

const renderRouterMap = (routes) => {
    routes.map((route,index)=>{
        return (
            <RouterGuard /> 
        )
    })
}

export default renderRouterMap