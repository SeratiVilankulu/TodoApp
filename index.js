var taskToAdd = document.querySelector("#newTask");
var noTask = document.querySelector(".task-name p");
var listContainer = document.querySelector(".tasks-todo");

//Check if input field is empty
document.querySelector("#add").addEventListener("click", function () {
	if (taskToAdd.value === "") {
		console.log("No task to add");
		noTask.classList.add("active");

		setTimeout(function () {
			noTask.classList.remove("active");
		}, 3000);
	} else {
		var newTask = document.createElement("li");
		newTask.classList.add("task");

		// Adding task content
		var taskContent = document.createElement("span");
		var circleIcon = document.createElement("i");
		circleIcon.classList.add("bi", "bi-circle");

		var taskAdded = document.createElement("p");
		taskAdded.innerHTML = taskToAdd.value;
		taskAdded.classList.add("single-task");

		var options = document.createElement("i");
		options.classList.add("bi", "bi-three-dots-vertical");

		// Append elements to the new task list
		newTask.appendChild(taskContent);
		taskContent.appendChild(circleIcon); // Adding Circle icon to span element
		taskContent.appendChild(taskAdded); // Adding task to span element
		newTask.appendChild(options);

		listContainer.appendChild(newTask);
		console.log("Task added");

		// Clear input field after adding task
		taskToAdd.value = "";
		saveTasks(); // Save task to local storage
	}
});

//Saving task list to local storage
function saveTasks() {
	localStorage.setItem("tasks", listContainer.innerHTML);
}

// Loading task list from local storage
function showTaskList() {
	listContainer.innerHTML = localStorage.getItem("tasks");
}

showTaskList(); // Call showTaskList when the page load
