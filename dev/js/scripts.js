import {
    gsap
} from "gsap";

const mainTL = gsap.timeline();

const duration= 0.5;

// name of timeline | do you want to start at the end or the beiginning of the timeline? | what do you want to anomate? \{how long os the animation? \what do you want to do?}

// mainTL.to("#hero",{duration:2, alpha:0});

mainTL.from("#hero >div article", {
    duration: 1,
    alpha: 0,
    y: "-=1000",
    scale: 3
});
mainTL.from("#hero h1", {
    duration: 0.9,
    alpha: 0,
    y: "+=200"
},"-=50%");