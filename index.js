var taskToAdd = document.querySelector("#newTask");
var descriptionToAdd = document.querySelector("#newDescription");
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
		var taskName = document.createElement("div");
		var circleIcon = document.createElement("i");
		circleIcon.classList.add("bi", "bi-circle");

		var taskAdded = document.createElement("p");
		taskAdded.innerHTML = taskToAdd.value;
		taskAdded.classList.add("single-task");

		var deleteIcon = document.createElement("i");
		deleteIcon.classList.add("bi", "bi-trash3");

		// Append elements to the new task list
		newTask.appendChild(taskContent);
		taskContent.appendChild(taskName);
		taskName.appendChild(circleIcon); // Adding Circle icon to span element
		taskName.appendChild(taskAdded); // Adding task to span element

		if (descriptionToAdd.value !== "") {
			var description = document.createElement("p");
			description.innerHTML = descriptionToAdd.value;
			description.setAttribute("id", "task-description");
			taskContent.appendChild(description);
		}
		newTask.appendChild(deleteIcon);

		listContainer.appendChild(newTask);
		console.log("Task added");

		// Clear input field after adding task
		taskToAdd.value = "";
		descriptionToAdd.value = "";
		saveTasks(); // Save task to local storage
	}
});

// Click event to mark task as done
listContainer.addEventListener("click", function (event) {
	console.log(event.target);
	// Check if the clicked element is a task
	if (event.target.classList.contains("single-task")) {
		event.target.classList.toggle("done");

		// Toggle circle icon and checked icon
		var icon = event.target.parentElement.querySelector("span i");
		console.log(icon);
		if (icon) {
			icon.classList.toggle("bi-circle");
			icon.classList.toggle("bi-check-circle-fill");
		}
	}
	// Remove task from list
	else if (event.target.classList.contains("bi-trash3")) {
		event.target.parentElement.remove();
		saveTasks();
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
