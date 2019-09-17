import Button from 'antd/es/button';
// import 'antd/es/button/style'; 
import 'antd/es/button/style/index.css'
import React , { Component } from 'react'


class Layout extends Component{
    render(){
        return(
            <div>
               <Button type="primary">Primary</Button> 
            </div>
        )
    }
}


export default Layout