import React, { Component } from 'react'

class TodoItem extends Component {

  constructor (props) {
    super(props)
    // 將 bind 方法提到 constructor 調用，如此下方的函數就不需特定使用 bind ，即可將 this 指向組件
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      // props 是子組件接收父組件參數的規定寫法
      <li onClick={this.handleClick}>{this.props.content}</li>
    )
  }
  handleClick () {
    this.props.deleteItem(this.props.value)
  }
}

export default TodoItem