import React , { Component } from 'react'
import Third from './third'


class Second extends Component{
  render(){
    return (
      <div>
       <div>Second</div>
        <Third />
      </div>
    )
  }
}
export default Second