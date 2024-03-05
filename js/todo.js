import { createButton } from './button.js';

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS = "todos";

let toDos = []; // let으로 선언하여 값을 변경할 수 있도록.

function loadTodoList() {
    const savedTodos = localStorage.getItem(TODOS); // 기존의 값 가져오기 

    if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos); // string (in LocalStorage) -> object
        toDos = parsedTodos;
        parsedTodos.forEach(addItem); // 리스트에 추가해주기
    }
}


function saveTodoList() {
    localStorage.setItem(TODOS, JSON.stringify(toDos)); // json string으로 저장
}


function deleteItem(event) {
    const li = event.target.parentElement; // 현재 지우려는 객체의 부모 객체 삭제
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // 지우려는 객체의 id와 일치하지 않으면 true 리턴 (남김), 일치하지 않으면 false 리턴
    saveTodoList();
}

function addItem(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    const deleteButton = createButton("Delete", deleteItem);
    li.appendChild(deleteButton);
    span.innerText = newToDoObj.text;
    li.id = newToDoObj.id;
    if (newToDoObj.isDone == true) li.classList.add("done");
    li.addEventListener("click", toggleDone);
    todoList.appendChild(li);
}


function onSubmitToDo(event) {
    event.preventDefault();

    const newToDoObj = { // 객체 생성 
        id: Date.now(),
        text: todoInput.value,
        isDone: false
    };

    addItem(newToDoObj);
    todoInput.value = "";

    toDos.push(newToDoObj);
    saveTodoList();
}

function toggleDone(event) {
    const tmpList = JSON.parse(localStorage.getItem(TODOS));
    tmpList.forEach((item) => {
        if (item.id == event.target.id) {
            if (item.isDone == true) {
                event.target.classList.remove("done");
                item.isDone = false;
            }
            else {
                event.target.classList.add("done");
                item.isDone = true;
               }
        }
    });

    toDos = tmpList;
    saveTodoList();
}

function onMouseOverList(event) {
    event.preventDefault(event);
    const todoItems = todoList.querySelectorAll("li");
    todoItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            item.querySelector("button").classList.remove("hidden");

        });
    })
};

function onMouseLeaveList(event) {
    event.preventDefault(event);
    const todoItems = todoList.querySelectorAll("li");
    todoItems.forEach(function (item) {
        item.addEventListener("mouseleave", function () {
            item.style.backgroundColor = "#ffffff";
            item.querySelector("button").classList.add("hidden");

        });
    });
}


if (localStorage.getItem("userName")) {
    todoForm.classList.remove("hidden");
}
loadTodoList();


todoForm.addEventListener("submit", onSubmitToDo);
todoList.addEventListener('mouseover', onMouseOverList);
todoList.addEventListener('mouseleave', onMouseLeaveList);