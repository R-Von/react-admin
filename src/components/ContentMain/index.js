import React , { Component } from 'react'
import { Switch , withRouter , Route } from 'react-router-dom'
import PrivateRoute from '../../router/privateRoute'
import routes from '../../router/config'
import NoMatch from '../../views/NoMatch'
import './index.css'

class ContentMain extends Component{
    render(){
        return (
            <div className="routerWrap">
                <Switch>
                    {
                        routes.map((item,index)=>{
                            return (
                                item.path?<PrivateRoute key={index} path={item.path} exact component={item.component} />:<Route component={NoMatch} />
                            )
                        })
                    }
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(ContentMain)

