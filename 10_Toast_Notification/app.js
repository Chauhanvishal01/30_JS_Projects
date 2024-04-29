const successBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");

let toastBox = document.getElementById("toastBox");
let successMsg = `<i class="fa-solid fa-circle-check"></i>Successfully Submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark" ></i> Please fix the error!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid Input Check Again!`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

successBtn.addEventListener("click", () => {
  showToast(successMsg);
});

errorBtn.addEventListener("click", () => {
  showToast(errorMsg);
});

invalidBtn.addEventListener("click", () => {
  showToast(invalidMsg);
});

// if(msg.includes('error')){
//     toast.classList.add("error");

//     }
//     if(msg.includes('invalid')){
//     toast.classList.add("invalid");

//     }
