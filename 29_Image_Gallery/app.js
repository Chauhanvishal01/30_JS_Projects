const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

const btn = document.getElementById("btn");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

btn.addEventListener("click", () => {
  fullImgBox.style.display = "none";
});

var images = document.querySelectorAll(".img-gallery img");
images.forEach(function (img) {
  img.addEventListener("click", function () {
    openFullImg(img.src);
  });
});
