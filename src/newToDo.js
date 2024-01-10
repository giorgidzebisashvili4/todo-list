function newToDo(title, description, dueDate, priority) {
  const todo = { title, description, dueDate, priority };
  const card = `title: ${todo.title}`;
  // dom card constructor that saves tamplate

  return { card };
}

export default newToDo;

const ul = document.querySelector(".ulDiv>ul");
const input = document.querySelector("#test");
const button = document.querySelector(".testbtn");
document.querySelector("#test").focus();

button.addEventListener("click", () => {
  const value1 = input.value;

  if (value1 !== "") {
    input.value = "";

    const card = document.createElement("li");
    const cardText = document.createElement("span");
    const cardBtn = document.createElement("button");

    cardText.textContent = value1;
    cardBtn.textContent = "Delete";
    cardBtn.addEventListener("click", () => {
      ul.removeChild(card);
    });

    card.appendChild(cardText);
    card.appendChild(cardBtn);
    ul.appendChild(card);
  }
  input.focus();
});
