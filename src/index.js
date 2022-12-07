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

let tasks = [];

function addTasks(description, completed, index) {
  const demoTask = new Task(description, completed, index);
  tasks.push(demoTask);
}

function sortArray(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
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

addTasks('Demo task 1', false, 1);
addTasks('Demo task 3', false, 3);
addTasks('Demo task 2', false, 2);
addTasks('Demo task 10', false, 10);
addTasks('Demo task 7', false, 7);
addTasks('Demo task 6', false, 6);

function displaytasks() {
  sortArray(tasks);
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