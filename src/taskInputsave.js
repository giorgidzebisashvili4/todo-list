import taskDisplay from "./taskDisplay";

function taskInputSave() {
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const dateInput = document.querySelector("#dueDate");
  const taskAddBtn = document.querySelector(".addtask");
  const savedTasks = [];

  taskAddBtn.addEventListener("click", () => {
    console.log(titleInput.value, descriptionInput.value, dateInput.value);
    const todo = {
      title: titleInput.value,
      description: descriptionInput.value,
      dueDate: dateInput.value,
    };
    // titleInput.value = "";
    // descriptionInput.value = "";
    // dateInput.value = "";
    savedTasks.push(todo);
    console.log(savedTasks);
    for (let i = 0; i < savedTasks.length; i++) {
      taskDisplay(
        savedTasks[i].title,
        savedTasks[i].description,
        savedTasks[i].dueDate,
      );
    }
  });
}
export default taskInputSave;
