import "./style.css";
import newToDo from "./newToDo";
import createProjects from "./addProjects";
import taskInputSave from "./taskInputsave";

// import Icon from './icon.png';

const todo1 = newToDo("sada", "dasda", "adasd", "adsdasd");

console.log(todo1.card);

createProjects();
taskInputSave();
