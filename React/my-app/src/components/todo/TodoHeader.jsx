import React from 'react';

function TodoHeader() {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <header>
            <h2>오늘 할 일 (To Do List)</h2>
            <p>{dateString}</p>
        </header>
    );
}

export default TodoHeader;
