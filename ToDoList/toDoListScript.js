window.addEventListener('load', () => {
  const tasks = JSON.parse(localStorage.getItem('toDoTasks'));
  if (tasks.length) {
    const tasksElements = tasks.map(
      (task) => `
      <div class ='task'>
          <span id='taskname'>
              ${task}
          </span>
          <button class = 'delete'>delete</button>
      </div>
      `
    );
    document.querySelector('#tasks').innerHTML = tasksElements.join('');
  }
});

const creatNewTask = function () {
  const inputValue = document.querySelector('#newTask input').value;
  if (inputValue) {
  }
  if (inputValue) {
    const todoTasks = JSON.parse(localStorage.getItem('toDoTasks')) || [];
    localStorage.setItem('toDoTasks', JSON.stringify([...todoTasks, inputValue]));

    document.querySelector('#tasks').innerHTML += `
          <div class ='task'>
              <span id='taskname'>
              ${inputValue}
              </span>
              <button class = 'delete'>delete</button>
          </div>
          `;
    const currentTasks = document.querySelectorAll('.delete');
    console.log(currentTasks);
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    const tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      };
    }
    document.querySelector('#newTask input').value = '';
    console.log('cliced');
  } else {
    alert('insert');
  }
};

document.querySelector('#push').onclick = creatNewTask;
document.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    creatNewTask();
  }
});
