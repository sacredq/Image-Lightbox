// const
const body = document.querySelector("body");
const closeBtn = document.getElementById("close");
const imageText = document.getElementById("image-number");

const images = document.querySelectorAll(".mainImages");
// images id 1-6:
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const infoBox = document.getElementById("info-box");
let windowImage = document.getElementById("windowImage");
// images navigation
const imageFolder = {
    image1: "images/img-1.jpg",
    image2: "images/img-2.jpg",
    image3: "images/img-3.jpg",
    image4: "images/img-4.jpg",
    image5: "images/img-5.jpg",
    image6: "images/img-6.jpg"
};

let currentImage = 1;
function openWindow(image){
    body.style.background = "rgba(0,0,0,0.45)";
    currentImage = image;
    infoBox.style.display = "flex"; 
    windowImage.src = imageFolder["image" + image];
    imageText.textContent = currentImage;
};

leftArrow.addEventListener("click", function(){
    currentImage--;
    if(currentImage >= 1){
        openWindow(currentImage);
    } else if(currentImage == 0){
        openWindow(6);
    }
});

rightArrow.addEventListener("click", function(){
    currentImage++;
    if(currentImage > 6){
        openWindow(1);
    } else{
        openWindow(currentImage);
    }
});

closeBtn.addEventListener("click", function(){
    infoBox.style.display = "none";
    body.style.background = "#fff";
});

img1.addEventListener("click", () => openWindow(1));
img2.addEventListener("click", () => openWindow(2));
img3.addEventListener("click", () => openWindow(3));
img4.addEventListener("click", () => openWindow(4));
img5.addEventListener("click", () => openWindow(5));
img6.addEventListener("click", () => openWindow(6));
