/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import './style.css';
import { addTasks, deleteTask } from './functions.js';

const list = document.querySelector('.list-container');
const form = document.querySelector('#form');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

class Task {
  constructor(description = '', completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = document.querySelector('.add-task');
  const comp = false;
  const ind = tasks.length;
  addTasks(desc.value, comp, ind);
  desc.value = '';
});

function sortArray(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j].index < array[i].index) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  tasks = array;
  return tasks;
}

function displaytasks() {
  sortArray(tasks);
  let taskgenerator = '';
  tasks.forEach((task) => {
    taskgenerator += `<div class="task">
    <div class="content-div"><input class="checkbox" type="checkbox">
    <input class="content" value="${task.description}"></div>
    <svg class="item-menu" id="menu" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" id="mainIconPathAttribute"></path> </svg>
    <svg class="trashcan" id="${task.index}" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" id="mainIconPathAttribute" fill="#737373"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" id="mainIconPathAttribute" fill="#737373"></path> </svg>
</div>`;
  });
  list.innerHTML = taskgenerator;
  const btn = document.querySelectorAll('.content');
  btn.forEach((b) => {
    const menu = b.parentElement.parentElement.children[1];
    const can = b.parentElement.parentElement.children[2];
    const cv = b.value;
    b.addEventListener('focus', () => {
      menu.style.display = 'none';
      can.style.display = 'block';
    });
    b.addEventListener('blur', () => {
      menu.style.display = 'block';
      can.style.display = 'none';
      if (b.value != cv) {
        let i = 0;
        while (i != can.id) {
          i++;
        }
        tasks[i].description = b.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  });
  const trash = document.querySelectorAll('.trashcan');
  trash.forEach((t) => {
    t.addEventListener('mousedown', () => deleteTask(t.id));
  });
}

displaytasks();

export { Task, tasks, displaytasks };