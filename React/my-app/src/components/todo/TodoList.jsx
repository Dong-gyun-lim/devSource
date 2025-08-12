import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onDelete }) {
    return (
        <div className="todo-list">
            {todos.length === 0 && <p>할 일이 없습니다.</p>}
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default TodoList;
