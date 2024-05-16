const loginBtn=document.getElementById("login-btn")
const registerBtn=document.getElementById("register-btn")
const loginForm=document.getElementById("login")
const registerForm=document.getElementById("register")
const bgBtn=document.getElementById("btn")

console.log(loginBtn);
console.log(registerBtn);
console.log(loginForm);
console.log(registerForm);
console.log(bgBtn);

 loginBtn.addEventListener("click",()=>{

    loginForm.style.left="50px"
    registerForm.style.left="450px"
    bgBtn.style.left="0"

 })

registerBtn.addEventListener("click",()=>{

    loginForm.style.left="-400px"
    registerForm.style.left="50px"
    bgBtn.style.left="110px"

})