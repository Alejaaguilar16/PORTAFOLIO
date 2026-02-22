document.querySelectorAll(".slider").forEach(slider => {

let images = slider.querySelectorAll("img");
let index = 0;

const showImage = (i)=>{
images.forEach(img=>img.classList.remove("active"));
images[i].classList.add("active");
}

let next = slider.querySelector(".next");
let prev = slider.querySelector(".prev");

if(next){
next.onclick=()=>{
index=(index+1)%images.length;
showImage(index);
}
}

if(prev){
prev.onclick=()=>{
index=(index-1+images.length)%images.length;
showImage(index);
}
}

});
