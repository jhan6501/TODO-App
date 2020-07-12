const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let count = 0
let unchecked = 0
function newTodo() {
    let toDo = prompt("Please enter action:")
    let newEntry = document.createElement('li')
    newEntry.innerHTML = toDo
    checkBox = document.createElement('INPUT')
    checkBox.setAttribute("type", "checkbox")
    checkBox.onclick = function() {
        console.log(this.checked)
        if (this.checked) {
            unchecked -= 1
            uncheckedCountSpan.innerHTML = unchecked
        } else {
            unchecked += 1
            uncheckedCountSpan.innerHTML = unchecked
        }
    }

    newEntry.appendChild(checkBox)
    list.appendChild(newEntry)
    count += 1
    unchecked += 1

    itemCountSpan.innerHTML = count
    uncheckedCountSpan.innerHTML = unchecked
}
