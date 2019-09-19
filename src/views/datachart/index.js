import React , { Component } from 'react'
import LineChart from '../../components/Chart/Line'
import PieChart from '../../components/Chart/Pie'
import RadarChart from '../../components/Chart/Radar'


import './index.css'

class DataChart extends Component{
  render(){
    return (
      <div className="chartWrap clearfix">
        <div className="row clearfix">
          <div className="chart">
            <LineChart />
          </div>
          <div className="chart">
            <PieChart />
          </div>
          <div className="chart">
            <RadarChart />
          </div>
          <div className="chart"></div>
          <div className="chart"></div>
        </div>
      </div>
    )
  }
}


export default  DataChart
