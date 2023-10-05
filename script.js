function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

loco();







var typed = new Typed('#main-typejs', {
  strings: ['Like Never Before'],
  typeSpeed: 50,
});

const page1= document.getElementById('page1');
const main= document.getElementById('main');

const chall = document.querySelector('#chall');
const video = document.querySelector('#video-sec');
const progress = document.querySelector('#progress');
const about = document.querySelector('#about');
const pheno =  document.querySelector('#pheno');
const pheno1 =  document.querySelector('#Phenotics');
const pheno2 = document.querySelector('#main>#page1>#Phenotics1');
const pheno3 = document.querySelector('#main>#page1>#Phenotics2')
const homp1 = document.querySelector('#main-cont');
const homp2 = document.querySelector('#page2');
const homp3 = document.querySelector('#page3');


//for phenotics

document.querySelector('#l2').addEventListener('click' ,()=>{
    page1.style.height='100vh';
    main.style.height='100vh';
    pheno.style.display='flex';
    pheno2.style.display='flex';
    pheno3.style.display='flex';
    homp1.style.display='none';
    homp2.style.display='none';
    homp3.style.display='none';
    video.style.display="none";
    progress.style.display="none";
    about.style.display="none";
    chall.style.display='none';
  });


//for home

document.querySelector('#l1').addEventListener('click' ,()=>{
  page1.style.height='100vh';
  main.style.height='300vh';
  page1.style.overflow='hidden';
  pheno.style.display='none';
  homp1.style.display='flex';
  homp2.style.display='flex';
  homp3.style.display='flex';
  video.style.display="none";
  progress.style.display="none";
  about.style.display="none";
  chall.style.display='none';
});

//chall
document.querySelector('#l3').addEventListener('click' ,()=>{
  page1.style.height='150vh';
  main.style.overflow='hidden';
  main.style.height='150vh';
  chall.style.display='block';
  pheno.style.display='none';
  homp1.style.display='none';
  homp2.style.display='none';
  homp3.style.display='none';
  video.style.display="none";
  progress.style.display="none";
  about.style.display="none";
});

//video
document.querySelector('#l5').addEventListener('click' ,()=>{
  page1.style.height='150vh';
  main.style.height='150vh';
  chall.style.display='none';
  pheno.style.display='none';
  homp1.style.display='none';
  homp2.style.display='none';
  homp3.style.display='none';
  video.style.display="flex";
  progress.style.display="none";
  about.style.display="none";
});
//proggress
document.querySelector('#l4').addEventListener('click' ,()=>{
  page1.style.height='100vh';
  main.style.height='100vh';
  chall.style.display='none';
  pheno.style.display='none';
  homp1.style.display='none';
  homp2.style.display='none';
  homp3.style.display='none';
  video.style.display="none";
  progress.style.display="flex";
  about.style.display="none";
});
//about us
document.querySelector('#l6').addEventListener('click' ,()=>{
  page1.style.height='100vh';
  main.style.height='90vh';
  page1.style.overflow='visible';
  chall.style.display='none';
  pheno.style.display='none';
  homp1.style.display='none';
  homp2.style.display='none';
  homp3.style.display='none';
  video.style.display="none";
  progress.style.display="none";
  about.style.display="flex";
});
// document.querySelector('#l3').addEventListener('click' ,()=>{
//   page1.style.height='150vh';
//   chall.style.display='flex';
//   pheno.style.display='none';
//   homp1.style.display='none';
//   homp2.style.display='none';
//   homp3.style.display='none';
//   video.style.display="none";
//   progress.style.display="none";
//   about.style.display="none";
// });













// gsap.to("#nav",{
  
//   height:'5vh',
  
//   scrollTrigger:{
//     trigger:"#nav",
//     scroller:"#main",
//     start:"top center",
//     end:"bottom top",
//     scrub:3
//   }
// })

// score card %
let number= document.getElementById('num');
let counter = 0;

setInterval(()=>{
  if(counter==65){
    clearInterval;
  }
  else{
    counter+=1;
    number.innerHTML = `${counter}%`;
  }
}, 19 )



