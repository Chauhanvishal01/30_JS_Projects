let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let msg = document.querySelector(".msg-container");

function getTodo(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerHTML = value;
  todo.appendChild(textEl);
  msg.classList.toggle("sucess");
  msg.textContent = "Item Added";

  setTimeout(() => {
    msg.classList.toggle("sucess");
  }, 2000);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times";
  closeEl.classList.add("delete");

  closeEl.addEventListener("click", () => {
    output.removeChild(todo);
    msg.classList.toggle("error");
    msg.textContent = "Item Deleted";

    setTimeout(() => {
      msg.classList.toggle("error");
    }, 2000);
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  output.appendChild(getTodo(value));
  input.value=""
});
