import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <h2>새로운 Todo 추가📌</h2>
            <input
                type="text"
                placeholder="새로운 Todo 추가하기"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default TodoForm;
