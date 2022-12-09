/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import { tasks } from './index.js';
import { reAssingIndex } from './functions.js';

let tasksf = tasks;
function checkBox(box) {
  if (box.checked) {
    let i = 0;
    while (i != box.name) {
      i++;
    }
    tasks[i].completed = true;
    tasks[i].chbox = 'checked';
  } else {
    let i = 0;
    while (i != box.name) {
      i++;
    }
    tasks[i].completed = false;
    tasks[i].chbox = '!checked';
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const deleteButton = document.querySelector('.clear-btn');

function deleteAll() {
  tasksf = tasks.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasksf));
  reAssingIndex(tasksf);
  localStorage.setItem('tasks', JSON.stringify(tasksf));
  window.location.reload();
}

deleteButton.addEventListener('click', deleteAll);

export default checkBox;