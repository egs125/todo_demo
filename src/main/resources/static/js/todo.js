document.addEventListener('DOMContentLoaded', function() {
    bindEventHandlers();
    getTodoList();
}, false);

function bindEventHandlers() {
    document.getElementById('searchBtn').addEventListener('click', () => getTodoList());
    document.getElementById('addBtn').addEventListener('click', () => addTodo());
}

function getTodoList() {
    fetch(
        'http://localhost:8080/todos',
        { method: 'GET' }
    )
    .then(res => res.json())
    .then(data => {
        const target = document.querySelector('#todo_list');
        data.forEach(el => {
            const li = document.createElement('li');
            li.setAttribute('id', el.id);
            li.setAttribute('class', 'flex');

            const input = document.createElement('input');
            input.value = el.content;
            input.setAttribute('id', el.id + '_input');
            input.setAttribute('class', 'li_input');

            const editBtn = document.createElement('button');
            editBtn.innerText = '수정';
            editBtn.addEventListener('click', () => editTodo(el.id));

            const delBtn = document.createElement('button');
            delBtn.innerText = '삭제';
            delBtn.addEventListener('click', () => deleteTodo(el.id));

            li.appendChild(input);
            li.appendChild(editBtn);
            li.appendChild(delBtn);

            target.appendChild(li);
        });
    })
    .catch(err => console.error(err));
}

function addTodo(targetID) {
    const newVal = document.querySelector('#new_todo').value;
    if ( !newVal ) {
        alert('추가할 내용이 없네용');
        return false;
    }

    fetch(
        'http://localhost:8080/todo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newVal,
        },
    )
    .then(() => {
        console.log('end')
    })
    .catch(err => console.error(err));
}

function editTodo(targetID) {
    const targetVal = document.getElementById(targetID + '_input').value;
    const targetObj = {
        id: targetID,
        content: targetVal
    };

    fetch(
        'http://localhost:8080/todo',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(targetObj)
        }
    )
    .then(() => {
        console.log('end')
    })
    .catch(err => console.error(err));
}

function deleteTodo(targetID) {
    console.log(targetID)

    fetch(
        'http://localhost:8080/todo?id=' + targetID,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    .then(() => {
        console.log('end')
    })
    .catch(err => console.error(err));
}