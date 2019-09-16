import React , { Component ,Fragment } from 'react' 
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom'
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
                {/* <Switch> */}
                    {/* {
                        routes.map((item,index)=>{
                            return (
                                <Fragment key="index">
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>

                                    <Route exact path = {item.path} component = {NotFound} />
                                </Fragment>
                            )
                        })
                    } */}

                    {/* <Route component = {NotFound} /> */}
                {/* </Switch> */}
                <Route component = {NotFound} />
            </Router>
        )   
    }
}

export default AppRouter