import React , { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DataCenter extends Component{
  render(){
    return(
      <div >
        数据组件
      </div>
    )
  }

}


export default withRouter(DataCenter)