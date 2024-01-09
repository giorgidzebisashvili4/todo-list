import "./style.css";
import { newToDo } from "./newToDo";

// import Icon from './icon.png';

const containerSelect = document.querySelector(".container");

const test = document.createElement("h1");

test.textContent = "testing css!!";

containerSelect.appendChild(test);

newToDo();
