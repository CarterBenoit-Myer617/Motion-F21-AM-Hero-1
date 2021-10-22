import {
    gsap
} from "gsap";

const mainTL = gsap.timeline();

const heroHeight = document.querySelector("#hero");

console.log(heroHeight.clientHeight + "px is the hight of the hero section");
console.log(heroHeight.clientWidth + "px is the with of the hero section");

// name of timeline | do you want to start at the end or the beiginning of the timeline? | what do you want to anomate? \{how long os the animation? \what do you want to do?}

// mainTL.to("#hero",{duration:2, alpha:0});

mainTL.from("#hero >div", {
    duration: 1,
    alpha: 0,
    y: "-heroHight.clientHight",
    scale: 3
});
mainTL.from("#hero h1", {
    duration: 0.9,
    alpha: 0,
    y: "+=200"
},"-=50%");