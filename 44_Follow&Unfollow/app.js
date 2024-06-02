let body = document.body;
let themer = document.querySelector(".themer");
const followBtn = document.querySelectorAll(".follow-button");

themer.addEventListener("click", toggletheme);

function toggletheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    themer.innerText = "Light";
  } else {
    body.className = "light-theme";
    themer.innerText = "Dark";
  }
}

followBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnfollow(e.target));
});

function followUnfollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") {
    button.innerText = "Unfollow";
  } else {
    button.innerText = "Follow";
  }
}
