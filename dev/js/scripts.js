import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

gsap.set("stem-end",{transformOrigin:"center bottom"});

const mainTl = gsap.timeline();

function GrowPlantOne(){

    const tl = gsap.timeline("#stem",{duration:0.5, scaleX:0});

    return tl;




}

mainTl.add(GrowPlantOne());







GSDevTools.create();











































// import {gsap} from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);

// const maintl = gsap.timeline();

// maintl.to("#leaves-start ", {duration: 1, morphSVG:"#leaves-end"});





































// var tl = gsap.timeline({onUpdate:updateSlider, defaults: {duration: 1}}),
//     circle = document.getElementById("circle");

// tl.to(circle, {morphSVG:"#hippo"}, "+=1")
//   .to(circle, {morphSVG:"#star"}, "+=1")
//   .to(circle, {morphSVG:"#elephant"}, "+=1")
//   .to(circle, {morphSVG:circle}, "+=1");








// /* controls */

// $("#slider").slider({
//   range: false,
//   min: 0,
//   max: 1,
//   step:.001,
//   slide: function ( event, ui ) {
//     tl.progress( ui.value ).pause();
//   },
//   stop: function () {
//     tl.play();
//   }
// }); 

// function updateSlider() {
//   $("#slider").slider("value", tl.progress());
// } 
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(GSDevTools);

// const mainTL = gsap.timeline();

// var endShape = document. "#leaf-start" ("hippo");
// gsap.to("#circle", {morphSVG: endShape, duration: 1});



// // svg element!!!!!!!!!!!!

// // gsap.to("#circle", {morphSVG:"#hippo", duration: 1});



// gsap. tl("#leaf-start", {duration: 1, morphSVG:"#leaf-end"});





// var tl = gsap.timeline({onUpdate:updateSlider, defaults: {duration: 1}}),
//     circle = document.getElementById("circle");

// tl.to(circle, {morphSVG:"#hippo"}, "+=1")
//   .to(circle, {morphSVG:"#star"}, "+=1")
//   .to(circle, {morphSVG:"#elephant"}, "+=1")
//   .to(circle, {morphSVG:circle}, "+=1");








// /* controls */

// $("#slider").slider({
//   range: false,
//   min: 0,
//   max: 1,
//   step:.001,
//   slide: function ( event, ui ) {
//     tl.progress( ui.value ).pause();
//   },
//   stop: function () {
//     tl.play();
//   }
// }); 

// function updateSlider() {
//   $("#slider").slider("value", tl.progress());
// } 