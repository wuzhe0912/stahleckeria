import React, { Fragment } from 'react'
// Fragment 是 React 提供一種佔位符，解決 JSX 語法返回必須在外層有一個 div 的問題
// Fragment 在 chrome 開發者工具中的 Elements 不會被顯示

function TodoList() {
  return (
    <Fragment>
      <header>
        Hello React!
      </header>
      <div className="wrap">
        <input />
        <button>Button</button>
        <ul>
          <li>Learning English</li>
          <li>Learning React</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default TodoList;