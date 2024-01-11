function createProjects() {
  const addProjBtn = document.querySelector(".addProject");
  const projectSection = document.querySelector(".projects");

  addProjBtn.addEventListener("click", () => {
    // add DOM project input section
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");

    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.name = "projectName";
    projectInput.id = "projectNameInput";
    projectInput.placeholder = "write project name";

    const projectBtnsDiv = document.createElement("div");
    projectBtnsDiv.classList.add("addProjectBtn");
    const addBtn = document.createElement("button");
    addBtn.id = "addProjectBtn";
    addBtn.textContent = "add";
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelProjectBtn";
    cancelBtn.textContent = "cancel";

    inputDiv.appendChild(projectInput);
    projectBtnsDiv.appendChild(addBtn);
    projectBtnsDiv.appendChild(cancelBtn);
    inputDiv.appendChild(projectBtnsDiv);

    projectSection.appendChild(inputDiv);

    // adding DOM project name from input
    addBtn.addEventListener("click", () => {
      // not save if nothing is typed
      if (projectInput.value !== "") {
        const inputValue = projectInput.value;
        //   remove input div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectSection.removeChild(inputDiv);
        //   add project name and delate rename button
        const nameProject = document.createElement("p");
        nameProject.textContent = inputValue;
        const nameProjectBtnDiv = document.createElement("div");
        nameProjectBtnDiv.classList.add("ProjectBtnDiv");
        const renameProject = document.createElement("button");
        renameProject.textContent = "R";
        const deleteProject = document.createElement("button");
        deleteProject.textContent = "x";
        projectDiv.appendChild(nameProject);
        projectDiv.appendChild(nameProjectBtnDiv);
        nameProjectBtnDiv.appendChild(renameProject);
        nameProjectBtnDiv.appendChild(deleteProject);
        projectSection.appendChild(projectDiv);

        deleteProject.addEventListener("click", () => {
          projectSection.removeChild(projectDiv);
        });
      }
    });

    // cancel DOM input
    cancelBtn.addEventListener("click", () => {
      projectSection.removeChild(inputDiv);
    });
  });

  //   const ul = document.querySelector(".ulDiv>ul");
  //   const input = document.querySelector("#test");
  //   const button = document.querySelector(".testbtn");

  //   button.addEventListener("click", () => {
  //     const value1 = input.value;

  //     if (value1 !== "") {
  //       input.value = "";

  //       const card = document.createElement("li");
  //       const cardText = document.createElement("span");
  //       const cardBtn = document.createElement("button");

  //       cardText.textContent = value1;
  //       cardBtn.textContent = "Delete";
  //       cardBtn.addEventListener("click", () => {
  //         ul.removeChild(card);
  //       });

  //       card.appendChild(cardText);
  //       card.appendChild(cardBtn);
  //       ul.appendChild(card);
  //     }
  //     input.focus();
  //   });
}

export default createProjects;
