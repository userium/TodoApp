// Add, delete and display todos
var todoList = {
	todo: [],
	addTodos: function() {
        // get the value from the input field
        var todoText = document.getElementById("addTodoInput").value;
        // add todotext on todo's array
        this.todo.push(todoText);
        console.log("here is my todo:" + todoText);
        document.getElementById("listOfTodos").innerHTML = '';
        this.displayTodos();
	},
	displayTodos: function() {
		this.todo.forEach(function(item) {
			// get Ul element
			var UlElement = document.getElementById("listOfTodos");
			// put Li element inside Ul
			var listTodos = document.createElement("li");
			UlElement.appendChild(listTodos);
			// add todo array item text inside the li element
			listTodos.innerHTML = item;	
		});
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
	}
}