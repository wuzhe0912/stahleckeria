import React, { Component } from 'react'
// PropTypes 是用於檢驗傳值過來的屬性
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor (props) {
    super(props)
    // 將 bind 方法提到 constructor 調用，如此下方的函數就不需特定使用 bind ，即可將 this 指向組件
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    let { content, test } = this.props
    return (
      // props 是子組件接收父組件參數的規定寫法
      <li onClick={this.handleClick}>
        {content} - {test}
      </li>
    )
  }
  handleClick () {
    let { deleteItem, value } = this.props
    deleteItem(value)
  }
}

// 類似 Vue 的 prop 傳值，差別在於 Vue 需要指定傳值的類型，但 React 僅需檢驗
// 若未傳值或傳空值，則不檢驗。但若添加 .isRequired
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  value: PropTypes.number
}

// 若父組件傳空 || 未傳值，則可調用此處的預設值
TodoItem.defaultProps = {
  test: 'Hello React'
}

export default TodoItem