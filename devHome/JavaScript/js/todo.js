document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const btnAdd = document.getElementById('btnAdd');
    const todoList = document.getElementById('todoList');

    btnAdd.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text !== '') {
            addTodo(text);
            todoInput.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.className = 'item';

        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                label.classList.add('completed');
            } else {
                label.classList.remove('completed');
            }
        });

        label.appendChild(document.createTextNode(text));
        label.appendChild(checkbox);

        const btnDelete = document.createElement('button');
        btnDelete.textContent = '삭 제';
        btnDelete.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(label);
        li.appendChild(btnDelete);
        todoList.appendChild(li);
    }
});
