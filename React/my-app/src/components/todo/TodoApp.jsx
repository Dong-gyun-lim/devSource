import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: '낮잠', date: '2025-08-12' },
        { id: 2, text: '게임', date: '2025-08-12' },
        { id: 3, text: '방청소', date: '2025-08-12' },
    ]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            date: new Date().toISOString().slice(0, 10),
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <TodoHeader />
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} />
        </div>
    );
}

export default TodoApp;
