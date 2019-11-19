import React , { Component } from 'react'
import TodoItem from './TodoItem'
import { observer } from 'mobx-react'
import { List } from 'antd'

@observer
class DataList extends Component{
  render(){
    let todos = [
      {
        id:'123',
        content:'周一活动A'
      },
      {
        id:'234',
        content:'周二活动B'
      },
      {
        id:'345',
        content:'周三活动C'
      }
    ]

    return (
      <List 
        bordered  
        dataSource={todos}  
        renderItem={item=>(
          <List.Item>
            <TodoItem {...item} />
          </List.Item>
        )}
      />
    )
  }
}


export default DataList