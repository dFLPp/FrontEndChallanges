const dots = document.querySelectorAll(".img-guider button");
const images = document.querySelectorAll(".img-cont img");
const nextItem = document.getElementById("next");
const prevItem = document.getElementById("prev");

let i = 0;
let j = 5;

function next(){
    document.getElementById("item" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("item" + (i+1)).classList.add("active");
    indicator(i+1);
}

function prev(){
    document.getElementById("item" + (i+1)).classList.remove("active");
    i = ( j + i - 1) % j;
    document.getElementById("item" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(dot => {
        dot.style.backgroundColor = "#FCFFF7";
    });
    document.querySelector(".img-guider button:nth-child(" + num + ")").style.backgroundColor = "var(--pr-cl)";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("item" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

nextItem.addEventListener("click", next);
prevItem.addEventListener("click", prev);