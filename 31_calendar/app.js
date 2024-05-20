const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthEl.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});

dayEl.innerHTML=date.toLocaleDateString("en",{
    weekday:"long",
})
dayNumberEl.innerHTML = date.getDate();
yearEl.innerHTML=date.getFullYear();


