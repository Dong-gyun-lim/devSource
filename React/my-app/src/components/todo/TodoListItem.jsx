import React from 'react';
import './TodoListItem.css';

function TodoListItem({ todo, onDelete }) {
    return (
        <div className="todo-item">
            <span>
                {todo.text} ({todo.date})
            </span>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </div>
    );
}

export default TodoListItem;
