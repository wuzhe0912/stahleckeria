import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// serviceWorker => PWA 功能
// 若部署在 https 協議的 server，當 user 第一次造訪 website 需要網路才能看到內容
// 但若中途網路中斷，user 依然可以看到上次訪問那一頁的內容，增加使用體驗
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
