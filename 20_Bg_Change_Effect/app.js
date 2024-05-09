const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const leftSpace = imgBox.offsetLeft;
const originalImg = document.getElementById("original_img");
const line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.addEventListener("mousemove", (e) => {
  var boxWidth = e.pageX - leftSpace + "px";

  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
});
