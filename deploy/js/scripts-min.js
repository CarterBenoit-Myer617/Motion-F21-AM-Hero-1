import { gsap } from "gsap";


// const duration = 0.75;

const mainTL = gsap.timeline();

// grab the element you want to get the height or width from

const heroHeight = document.querySelector("#hero");

console.log(heroHeight.clientHeight + "px is the height of the hero section");
console.log(heroHeight.clientWidth + "px is the width of the hero section");

// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}
mainTL.to("#hero",{duration:2, alpha:0,y:"=1000", scale: 2});

mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
       .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation: 180}, "madeUp")
       .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp");