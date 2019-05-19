import React, { Fragment } from 'react'
// Fragment 是 React 提供一種佔位符，解決 JSX 語法返回必須在外層有一個 div 的問題
// Fragment 在 chrome 開發者工具中的 Elements 不會被顯示
import TodoItem from './TodoItem'
import './style.css'

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
          {/* 在JSX當中，label 標籤使用的 for 必須改採用 htmlFor */}
          <label htmlFor="insertArea">輸入內容</label>
          {/* 將input的內容，和state數據庫進行雙向綁定 */}
          {/* 運用 ES6 語法中的 bind 函數，將 this 指向轉為整個組件 */}
          <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>送出 Button</button>
        </div>
        <ul>
          {
            this.state.list.map((node, index) => {
              return (
                <ul key={index}>
                  {/* 父組件可以透過屬性，向子組件傳值，左邊是自訂命名，右側則是準備傳給子組件的參數 */}
                  <TodoItem
                    content={node}
                    value={index}
                    // 屬性也可以傳遞父組件的函數，為了避免子組件無法找到this指向，必須在傳參時連帶調用bind方法
                    deleteItem={this.handleItemDelete.bind(this)}
                  />
                </ul>
              )
            })
          }
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
  handleBtnClick () {
    this.setState({
      // ... 即是ES6的展開運算符，將陣列內的舊資料與新資料，重新組成新陣列
      list: [...this.state.list, this.state.inputValue],
      // 新增 todo-list 後，同時初始化 input
      inputValue: ''
    })
  }
  handleItemDelete (index) {
    // 展開運算符，也可以理解為建立副本，在操作數據庫變化，建議透過副本操作，而非直接更動數據庫
    // 在react 中有 immutable 這個概念，簡單說就是不要直接修改 state 內容，透過副本修改
    let listCopy = [...this.state.list]
    // 第一個參數，選擇要刪除的對應index，第二參數決定刪除此index後面幾個列表
    listCopy.splice(index, 1)
    this.setState({
      list: listCopy
    })
  }
}

export default TodoList;
