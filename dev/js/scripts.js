import {gsap} from "gsap";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function growprogress(){
    const tl = gsap.timeline();
    tl.from("#fill",{duration: 2, scaleX:0});
    return tl;

}










// // mainTL.to("#Vector", {
// //     duation: 1,
// //     alpha: 0,
// //     scale: 2
// // });

// function flowerstopmotion() {

//     const tl = gsap.timeline

//     tl.from("#MacBook Pro - 1", {
//         duration: 2,
//     });
//     return tl;

// }

// // function outline() {

// //     const tl = gsap.timeline

// //     tl.from("#MacBook Pro - 1", {
// //         duration: 4,
// //     });
// //     return tl;

// // }

// mainTl.add(flowerstopmotion()).add(outline)




















// const mainTL = gsap.timeline();

// const heroHeight = document.querySelector("#hero");

// console.log(heroHeight.clientHeight + "px is the hight of the hero section");
// console.log(heroHeight.clientWidth + "px is the with of the hero section");

// // name of timeline | do you want to start at the end or the beiginning of the timeline? | what do you want to anomate? \{how long os the animation? \what do you want to do?}

// // mainTL.to("#hero",{duration:2, alpha:0});

// mainTL.from("#hero >div", {
//     duration: 1,
//     alpha: 0,
//     y: "-heroHight.clientHight",
//     scale: 3
// });
// mainTL.from("#hero h1", {
//     duration: 0.9,
//     alpha: 0,
//     y: "+=200"
// },"-=50%");

// GSDevTools.create();