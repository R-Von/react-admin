import React , { Component } from 'react'
import notFound from '../../assets/images/404.svg'
import './index.css'

class NoMatch extends Component{
  render(){
    return (
      <div className="notFound">
        <img src={notFound} className="notFoundIcon" alt="not found" />
        <p className="tips">
          We Lost  Cant't Find This Page
        </p>      
      </div>
    )
  }
}
export default NoMatch
