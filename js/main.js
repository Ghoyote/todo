i = 1;
window.onload = () => {
  var addTodo = document.getElementById('addTodo');
  addTodo.addEventListener('click', createTodo);
};

function destroy(obj) {
  var bj = document.getElementById(obj);
  bj.parentNode.removeChild(bj);
}

function createTodo() {
  var li = document.createElement('li');
  li.classList.add(
    'todo-item',
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );
  var liId = `item${i++}`;
  li.setAttribute('id', liId);
  // create span
  var selSpan = document.createElement('span');
  // add class of select
  selSpan.classList.add('select');
  // create element <input>
  var checkBox = document.createElement('input');
  // set it to be a checkbox
  checkBox.setAttribute('type', 'checkBox');
  // put checkbox in span
  selSpan.appendChild(checkBox);

  // put span in li
  li.appendChild(selSpan);

  // create text node and add to li
  var todoContent = document.createTextNode('Some random ruminations');
  li.appendChild(todoContent);

  var buttons = document.createElement('div');
  // edit
  var edit = document.createElement('span');
  edit.classList.add('badge');
  var editBtn = document.createElement('i');
  editBtn.classList.add('fas', 'fa-pencil-alt', 'cust-btn');
  edit.appendChild(editBtn);

  // separator
  var bar = document.createTextNode(' | ');
  edit.appendChild(bar);
  // trash
  var trashBtn = document.createElement('i');
  trashBtn.classList.add(
    'text-primary',
    'cust-btn',
    'delete-text',
    'fas',
    'fa-trash'
  );
  trashBtn.addEventListener('click', function(e) {
    return destroy(liId);
  });
  edit.appendChild(trashBtn);
  buttons.appendChild(edit);
  li.appendChild(buttons);
  // update
  var listZone = document.getElementById('list-zone');
  listZone.append(li);
}
