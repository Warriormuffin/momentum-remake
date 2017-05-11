function TodoController(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function(e) {
		e.preventDefault()
    var todo = e.target.todo.value
		var todosArray = todoService.getTodos()
    todosArray.push(todo)
    e.target.todo.value = ""
		todoService.saveTodos(todosArray)
    drawTodos(todosArray)
    drawTodosLength(todosArray)
	}

  function drawTodos(todosArray){
    var template = '';
    var elem = document.getElementById('todolist')
    for (var i = 0; i < todosArray.length; i++) {

      var todo = todosArray[i];
      template += `
        <h6 class="todo-item" onclick="app.controllers.todoController.deleteTodo('${todo}')"><i class="fa fa-circle-o" aria-hidden="true"></i> ${todo}</h6>
      `
    }
    elem.innerHTML = template
    drawTodosLength(todosArray)
  }

  function drawTodosLength(todosArray){
    var template = '';
    var elem = document.getElementById('card-header')
      template += `
        <p>${todosArray.length} Todos</p>
      `
      elem.innerHTML = template
  }

  this.deleteTodo = function deleteTodo(todo){
    var todosArray = todoService.getTodos()
    for (var i = 0; i < todosArray.length; i++) {
      var todos = todosArray[i];
      if(todos == todo){
        todosArray.splice(i, 1)
      }
    }
    todoService.saveTodos(todosArray)
    drawTodos(todosArray)
  }
}