// Add, delete and display todos
var todoList = {
	todo: [],
	addTodos: function() {
        // get the value from the input field
        var todoText = document.getElementById("addTodoInput").value;
        // add todotext on todo's array
        this.todo.push(todoText);
        document.getElementById('listOfTodos').innerHTML = '';
        this.displayTodos();
        this.createDeleteButton();
	},
	displayTodos: function() {
		for(var i = 0; i< this.todo.length; i++) {
			// get Ul element
			var UlElement = document.getElementById("listOfTodos");
			// put Li element inside Ul
			var listTodos = document.createElement("li");
			UlElement.appendChild(listTodos);
			// add todo array item text inside the li element
			listTodos.className = 'listTodos';
			listTodos.id = i;
			listTodos.innerHTML = this.todo[i];	
		}

	},
	deleteTodo: function() {
		// get todo item array position
		var getPosition = document.getElementById("deleteTodo").value;
		// remove item from todo array
		this.todo.splice(getPosition, 1);
		// empty list
        document.getElementById("listOfTodos").innerHTML = '';
        // display all todos from the todo array
		this.displayTodos();
	},
	createDeleteButton: function() {
		// display delete button on each todo list item
		var deleteButton = document.createElement('button');
		deleteButton.textContent = "delete";
		deleteButton.className = 'deleteButton';
		var addDeleteButton = document.getElementsByClassName('listTodos');
		for(var i=0;i<addDeleteButton.length; i++) {
			addDeleteButton[i].appendChild(deleteButton.cloneNode(true));
		}
	},
	deleteTodos: function() {
		// Make delete button work
	}
}

