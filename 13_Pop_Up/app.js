const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okbtn");

btn.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
okBtn.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
