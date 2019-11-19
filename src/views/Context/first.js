import React , { Component } from 'react'
import Second from './second'
import PropTypes from 'prop-types'

// const BatteryContext = createContext()
// const { Provider } = BatteryContext

class First extends Component{
   // 声明Context对象属性
   static childContextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func
  }

  // 返回Context对象，方法名是约定好的
  getChildContext () {
    return {
      propA: 'propA',
      methodA: () => 'methodA'
    }
  }
  
  render(){
    // 创建context
    return (
      <div>
        <div>First</div>
        <Second />
      </div>
    )
  }
}
export default First