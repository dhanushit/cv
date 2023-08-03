
let loader=document.querySelector('.loader');

window.addEventListener("load",vanish);

function vanish(){
  loader.classList.add("disapper")
}


var typed = new Typed('.text-animation', {
  strings: ["Web Developer", "App Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});

var curs = document.getElementById("cursor");

document.addEventListener("mousemove", function (event) {
  curs.style.left = event.x + 20 + "px";
  curs.style.top = event.y + 20 + "px";

});

var bottomnav = document.querySelector(".bottom-nav");
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");
var bottomnavcontent = document.querySelector(".bottom-nav-content-box")



function slide() {


  if (bottomnav.classList.contains('visible')) {
    bottomnavcontent.classList.toggle('bottom-nav-visible');
    menu.classList.toggle("menuinvisible");
    close.classList.toggle("menuinvisible");
    setTimeout(() => {
      bottomnav.classList.toggle('visible');
    }, 1000);
    return;
  }


  bottomnav.classList.toggle("visible");
  menu.classList.toggle("menuinvisible");
  close.classList.toggle("menuinvisible");
  bottomnavcontent.classList.toggle('bottom-nav-visible');

}




