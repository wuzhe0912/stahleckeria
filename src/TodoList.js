import React, { Fragment } from 'react'
// Fragment 是 React 提供一種佔位符，解決 JSX 語法返回必須在外層有一個 div 的問題
// Fragment 在 chrome 開發者工具中的 Elements 不會被顯示

// 使用 class 的格式，是比較舊的寫法，在16.8之後版本，改直接調用函數
class TodoList extends React.Component {
  // 在類別，必然要建立建構式
  constructor (props) {
    // 建立一個 state 作為初始值與數據庫
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  // 準備組件要畫(渲染)出的內容
  render () {
    return (
      <Fragment>
        <div className="wrap">
          {/* 將input的內容，和state數據庫進行雙向綁定 */}
          {/* 運用 ES6 語法中的 bind 函數，將 this 指向轉為整個組件 */}
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button>送出 Button</button>
        </div>
        <ul>
            <li>Learning React</li>
            <li>Learning English</li>
        </ul>
      </Fragment>
    )
  }
  handleInputChange (e) {
    // this.setState 是 react 規定用於改變數據的方法，必須調用此方法才能改變數據
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList;