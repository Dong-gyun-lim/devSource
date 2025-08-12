import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/todo/TodoApp.jsx'; // 경로 지정
import './index.css'; // 기본 스타일

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);
