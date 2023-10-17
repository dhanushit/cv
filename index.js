'use strict'

let loader = document.querySelector(".loader");

// window.addEventListener(, vanish);

// function vanish() {
  
//   setTimeout(function() {
//     loader.classList.add("disapper");
//   }, 500);
// }

window.addEventListener("load", function() {
  setTimeout(function() {
    loader.classList.add("disapper");
  }, 500);
});


var typed = new Typed(".text-animation", {
  strings: ["Web Developer", "App Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
});




var curs = document.getElementById("cursor");

document.addEventListener("mousemove", function (event) {
  curs.style.left = event.x + 20 + "px";
  curs.style.top = event.y + 20 + "px";
});

var bottomnav = document.querySelector(".bottom-nav");
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");
var bottomnavcontent = document.querySelector(".bottom-nav-content-box");

function slide() {
  if (bottomnav.classList.contains("visible")) {
    bottomnavcontent.classList.toggle("bottom-nav-visible");
    menu.classList.toggle("menuinvisible");
    close.classList.toggle("menuinvisible");
    setTimeout(() => {
      bottomnav.classList.toggle("visible");
    }, 1000);
    return;
  }

  bottomnav.classList.toggle("visible");
  menu.classList.toggle("menuinvisible");
  close.classList.toggle("menuinvisible");
  bottomnavcontent.classList.toggle("bottom-nav-visible");
}

window.addEventListener('scroll',()=>{
    var scrollTop = document.querySelector('.arrow');
    if(window.scrollY > 800){
      scrollTop.style.opacity = '1';
    }else{
      scrollTop.style.opacity = '0';
    }
});


const cards = document.getElementsByClassName('animateup');
const arr = Array.from(cards);
const observer = new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    const ele =entry.target;
    if(entry.isIntersecting){
      ele.style.transition = '1.2s';
      ele.style.animation = 'fadeup 1s ease';
      ele.style.transform = `translateY(0px)`;
      ele.style.opacity='1';
      observer.unobserve(entry.target)
    }
    
    // else{
    //   ele.style.animation = 'none';
    //   ele.style.transform = `translateY(200px)`;
    // }
    
    console.log(ele.style);
    // console.log(entry.target.style.animation = 'fadeup 2s');
   });
});


arr.forEach((card)=>{
    observer.observe(card);
});
