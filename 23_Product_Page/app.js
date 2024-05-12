// const productImg=document.getElementById("product-img")
// const btn=document.getElementsByClassName("btn")

// btn[0].onclick = function(){
//     productImg.src="img/image1.png"
//     for(bt of btn){
//         bt.classList.remove("active")
//     }
//     this.classList.add("active")
// }

// btn[1].onclick = function(){
//     productImg.src="img/image2.png"
//     for(bt of btn){
//         bt.classList.remove("active")
//     }
//     this.classList.add("active")
// }

// btn[2].onclick = function(){
//     productImg.src="img/image3.png"
//     for(bt of btn){
//         bt.classList.remove("active")
//     }
//     this.classList.add("active")
// }

const productImg = document.getElementById("product-img");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
    btn.onclick = function() {
        productImg.src = `img/image${index + 1}.png`;
        btns.forEach(bt => bt.classList.remove("active"));
        this.classList.add("active");
    };
});
