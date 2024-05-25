const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", () => {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  passwordlength = 7;
  password = "";

  for (let i = 0; i <= passwordlength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
});

copyBtn.addEventListener("click", () => {
  let copytext = document.getElementById("password");
  copytext.select();
  document.execCommand('copy')
});
