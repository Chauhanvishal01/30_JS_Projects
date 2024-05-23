const password = document.getElementById("pass");

const bg = document.querySelector(".background-image");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurr = 20 - length * 2;
  bg.style.filter = `blur(${blurr}px)`;
});
