import React , { Component } from 'react'
import { Link } from 'react-router-dom'
// import routes from '../../router/config'

class Header extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <ul className="header">
                <li><Link to="/a">A</Link></li>
                <li><Link to="/b">B (needs)</Link></li>
                <li><Link to="/c">C</Link></li>
            </ul>
        )
    }
}

export default Header