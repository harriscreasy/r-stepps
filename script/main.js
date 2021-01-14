const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});



const banner = document.querySelector(".bannerVid");
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    banner.style.clipPath = "circle("+ value +"px at center center)";
})

let video = querySelector('.bannerVid #videoRobot > source');
let img1 = document.querySelector('.backgroundRobot .imageRobot #imageRobot');
let img2 = document.querySelector('.backgroundRobot .imageRobot #textRobot');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');


function changevid(buttonlink) { 
  document.getElementById('videoRobot').src = buttonlink;
}

btn1.addEventListener('click', () => {

  img1.src = '/img/ROBOT1.png';
  img2.src = '/img/ROBOT1.png';

})

btn2.addEventListener('click', () => {
  img1.src = '/img/ROBOT2.png';
  img2.src = '/img/ROBOT2.png';
})

btn3.addEventListener('click', () => {
  img1.src = '/img/ROBOT3.png';
  img2.src = '/img/ROBOT3.png';
})

btn4.addEventListener('click', () => {
  img1.src = '/img/ROBOT1.png';
  img2.src = '/img/ROBOT1.png';
})

btn5.addEventListener('click', () => {
  img1.src = '/img/ROBOT2.png';
  img2.src = '/img/ROBOT2.png';
  
})

btn6.addEventListener('click', () => {
  img1.src = '/img/ROBOT3.png';
  img2.src = '/img/ROBOT3.png';
})

