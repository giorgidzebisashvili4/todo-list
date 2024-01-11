function taskDisplay(title, description, dueDate) {
  const cardsDiv = document.querySelector(".cards");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("cardDiv");

  const titleH = document.createElement("h1");
  titleH.textContent = title;
  const descriptionH = document.createElement("h2");
  descriptionH.textContent = description;
  const dueDateH = document.createElement("h3");
  dueDateH.textContent = dueDate;

  cardDiv.appendChild(titleH);
  cardDiv.appendChild(descriptionH);
  cardDiv.appendChild(dueDateH);
  cardsDiv.appendChild(cardDiv);
}

export default taskDisplay;
