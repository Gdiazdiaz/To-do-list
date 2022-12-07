// import _ from 'lodash';
import './style.css';

const list = document.querySelector('.list-container');

class Task {
  constructor(description = '', completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const tasks = [];

function addTasks(description, completed, index) {
  const demoTask = new Task(description, completed, index);
  tasks.push(demoTask);
}

addTasks('Demo task 1', false, 1);
addTasks('Demo task 2', false, 2);

function displaytasks() {
  let taskgenerator = '';
  tasks.forEach((task) => {
    taskgenerator += `<div class="task">
      <div class="content-div"><input class="checkbox" type="checkbox">
      <p class="content">${task.description}</p></div>
      <svg class="item-menu" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" id="mainIconPathAttribute"></path> </svg>
  </div>`;
  });
  list.innerHTML = taskgenerator;
}

displaytasks();