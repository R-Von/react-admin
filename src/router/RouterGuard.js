import React , {Component} from 'react'
import routes from './config'

class RouterGuard extends Component{
    constructor(props){
        super()
    }
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                routerguard
            </div>
        )
    }
}

export default RouterGuard