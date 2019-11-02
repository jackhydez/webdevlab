window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');
  var checkBoxAll = document.getElementById('checkbox-all');

  // ??? enterkey
  txtArea.addEventListener('keyup', function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById('button').click();
    }
  });

  // add task handler
  // добавить по нажатию слеша переход в поле??
  btn.onclick = function () {
    // add element to UI
    if (txtArea.value !== '') {
      var taskContent = txtArea.value;
      var containerToDo = document.getElementById('container-to-do');
      var newTask = document.createElement('div');
      newTask.classList.add('new', 'checkbox');
      containerToDo.append(newTask);
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      label.append(check);
      newTask.append(label);
      var text = document.createTextNode(taskContent);
      label.append(text);
      var icon = document.createElement('i');
      icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
      newTask.append(icon);
      txtArea.value = '';
      // register events here:

      // complete task
      check.onclick = function () {
        label.classList.toggle('completed');
      };

      checkBoxAll.onclick = function () {
        // todo
        var tasks = document.querySelectorAll('.new');
          for (var i = 0; i < tasks.length; i++) {
            // todo: лучше найти дочерний label по селектору&&&
            tasks[i].childNodes[0].classList.toggle('completed');
            tasks[i].childNodes[0].childNodes[0].checked = true;
          }
      };

      // TODO: delete task event
      icon.onclick = function () {
        //console.log('delete');
        newTask.classList.add('hide');
      };
    }
  };


  // ?????
/*
  // TODO: complete all handler here
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function () {
      console.log('complete all');
    };
*/
  // TODO: filter tasks
  /*
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      console.log('show all');
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      console.log('show completed');
    };

    var filterShowCompleted = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      console.log('show removed');
    };
  */
}
