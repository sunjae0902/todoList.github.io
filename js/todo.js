import { createButton } from './button.js';

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function loadTodoList(){
   const savedTodos = localStorage.getItem("todos");
   if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => {
        console.log("hello");

    });
   }
  

}
function saveTodoList(){
    localStorage.setItem("todos",JSON.stringify(toDos)); // json string으로 저장
}


function deleteItem(event){
    const li = event.target.parentElement;
    li.remove();

}

function addItem(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(createButton("Delete",deleteItem));

    span.innerText = newToDo;
    todoList.appendChild(li);
}


function onSubmitToDo(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    addItem(newToDo);
    todoInput.value= "";
    toDos.push(newToDo);
    saveTodoList();

}

function onMouseOverList(event){
    event.preventDefault(event);
    const todoItems = todoList.querySelectorAll("li");
    todoItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            const buttons = item.querySelectorAll("button");
            buttons.forEach(function(button){
            
                button.classList.remove("hidden");
            });
        });
    });

}
function onMouseLeaveList(event){
    event.preventDefault(event);
    const todoItems = todoList.querySelectorAll("li");
    todoItems.forEach(function(item) {
        item.addEventListener("mouseleave", function() {
            item.style.backgroundColor = "#ffffff";
            const buttons = item.querySelectorAll("button");
            buttons.forEach(function(button){
              
               button.classList.add("hidden");
            });
        });
        });
    }

loadTodoList();


todoForm.addEventListener("submit",onSubmitToDo);
todoList.addEventListener('mouseover',onMouseOverList);
todoList.addEventListener('mouseleave',onMouseLeaveList);