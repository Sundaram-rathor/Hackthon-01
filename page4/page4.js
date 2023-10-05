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














var audio001 = new  Audio('.././audios/i.mp3');
var audio002 = new  Audio('.././audios/y.mp3')
var audio003 = new  Audio('.././audios/ɨ.mp3')
var audio004 = new  Audio('.././audios/ʉ.mp3')
var audio005 = new  Audio('.././audios/ɯ.mp3')
var audio006 = new  Audio('.././audios/u.mp3');
var audio007 = new  Audio('.././audios/ɪ.mp3')
var audio008 = new  Audio('.././audios/ʏ.mp3')
var audio009 = new  Audio('.././audios/ʊ.mp3')
var audio0010 = new Audio('.././audios/e.ogg')

var audio0011 = new Audio('.././audios/ø.ogg');
var audio0012 = new Audio('.././audios/ɘ.ogg')
var audio0013 = new Audio('.././audios/ɵ.ogg')
var audio0014 = new Audio('.././audios/ɤ.ogg')
var audio0015 = new Audio('.././audios/o.ogg')
var audio0016 = new Audio('.././audios/ə.ogg');
var audio0017 = new Audio('.././audios/ɛ.ogg')
var audio0018 = new Audio('.././audios/œ.ogg')
var audio0019 = new Audio('.././audios/ɜ.ogg')
var audio0020 = new Audio('.././audios/ɞ.ogg')
var audio0021 = new Audio('.././audios/ʌ.ogg');
var audio0022 = new Audio('.././audios/ɔ.ogg')
var audio0023 = new Audio('.././audios/æ.ogg')
var audio0024 = new Audio('.././audios/ɐ.ogg')
var audio0025 = new Audio('.././audios/a.ogg')
var audio0026 = new Audio('.././audios/ä.ogg');
var audio0027 = new Audio('.././audios/ɑ.ogg')
var audio0028 = new Audio('.././audios/ɒ.ogg')




var audio2001 = new Audio('.././audios2/p.ogg')