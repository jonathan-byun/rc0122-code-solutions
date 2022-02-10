var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', eventLog);

function eventLog(e) {
  console.log(e.target, e.target.tagName);
  if (e.target.nodeName === 'BUTTON') {
    var taskListItem = e.target.closest('.task-list-item');
    console.log('task list item', taskListItem);
    taskListItem.remove();
  }
}
