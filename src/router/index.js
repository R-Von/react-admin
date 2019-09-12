import React , { Component ,Fragment } from 'react' 
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import componentA from '../views/a'
import componentB from '../views/b'
import componentC from '../views/c'
 
class AppRouter extends Component{
    render(){
        return (
            <Router>
                <Route path = "/a" component = { componentA }  />
                <Route path = "/b" component = { componentB }  />
                <Route path = "/c" component = { componentC }  />
            </Router>
        )   
    }
}

export default AppRouter