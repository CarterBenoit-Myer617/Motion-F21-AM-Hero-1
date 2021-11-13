import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


const mainTl = gsap. timeline();

function GrowPlantOne(){

  const tl = gsap.timeline();

  tl.from("#stem", {duration:0.5, scaleY: 0});

  return tl;

}

mainTl.add(GrowPlantOne());