function todo() {
  const btn = document.querySelector(".add-todo button");
  const ul = document.querySelector("ul");
  btn.addEventListener("click", () => {
    const todoText = document.querySelector(".add-todo input[type='text']");
    if (todoText.value != "") {
      const newLine = document.createElement("li");
      newLine.classList.toggle("task");
      newLine.innerHTML = `${todoText.value}<span>&#x2716;</span>`;
      ul.appendChild(newLine);
      todoText.value = "";
      saveData();
    }
  });
  ul.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("done-task");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });
  function saveData() {
    window.localStorage.setItem("data", ul.innerHTML);
  }
  function getData() {
    ul.innerHTML = window.localStorage.getItem("data");
  }
  getData();
}
todo();
