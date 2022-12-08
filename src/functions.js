/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import { Task, tasks, displaytasks } from './index.js';

function addTasks(description, completed, index) {
  const demoTask = new Task(description, completed, index);
  tasks.push(demoTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displaytasks();
}

function reAssingIndex() {
  for (let j = 0; j < tasks.length; j++) {
    tasks[j].index = j;
  }
  return tasks;
}

function deleteTask(index) {
  let i = 0;
  while (i != index) {
    i++;
  }
  tasks.splice(i, 1);
  reAssingIndex(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displaytasks();
}

export { addTasks, deleteTask, reAssingIndex };