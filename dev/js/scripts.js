import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

gsap.set("#stem",{TransformOrigin:"center bottom"});
gsap.set("#Plant-Clip",{TransformOrigin:"bottom"});
gsap.set("#Plants-Stems-Clip",{TransformOrigin:"bottom"});
gsap.set("#leaves-Clip",{TransformOrigin:"bottom"});


const mainTl = gsap. timeline();

function GrowPlantOne(){

  const tl = gsap.timeline();

  // tl.from("#stem", {duration:1, scaleY:0});

  tl.from("#Plant-Clip", {duration:1, scaleY:0})
  .from("#Plants-Stems-Clip", {duration:1, scaleY:0})
  .from("#leaves-Clip", {duration:1, scaleY:0})
  // .from("#Plants-Stems", {duration:1, scaleY:100});

  // tl.from("#stem", {duration:0.5, drawSVG:"0%"});

  return tl;

}

mainTl.add(GrowPlantOne());