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