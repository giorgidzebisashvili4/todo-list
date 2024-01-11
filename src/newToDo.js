function newToDo(title, description, dueDate, priority) {
  const todo = { title, description, dueDate, priority };
  const card = `title: ${todo.title}`;
  // dom card constructor that saves tamplate

  return { card };
}

export default newToDo;
