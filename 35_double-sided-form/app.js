const loginform = document.querySelector(".login-form");
const signupform = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login-btn");
const SignupBtn = document.querySelector(".signup-btn");
const backlayer = document.querySelector(".back-layer");

SignupBtn.addEventListener("click", () => {
  loginform.classList.remove("active");
  signupform.classList.add("active");
  backlayer.style.clipPath = "inset(0 0 0 50%)";
});
loginBtn.addEventListener("click", () => {
  signupform.classList.remove("active");
  loginform.classList.add("active");
  backlayer.style.clipPath = "";
});
