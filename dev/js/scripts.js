import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

// gsap.set("#stem",{TransformOrigin:"center bottom"});

gsap.set("#Plant-Clip",{TransformOrigin:"bottom"});
gsap.set("#Plants-Stems-Clip",{TransformOrigin:"bottom"});
gsap.set("#leaves-Clip",{TransformOrigin:"bottom"});

gsap.set("#Grass-clip",{TransformOrigin:"bottom"});

gsap.set("#LG-Stem-Red-clip",{TransformOrigin:"bottom"});
gsap.set("#Flower-Red-One-clip",{TransformOrigin:"bottom"});

gsap.set("#DG-Stem-Two-clip",{TransformOrigin:"bottom"});
gsap.set("#Flower-Red-Three-clip",{TransformOrigin:"bottom"});

gsap.set("#LG-Stem-White-clip",{TransformOrigin:"bottom"});
gsap.set("#Flower-white-two-clip",{TransformOrigin:"bottom"});

gsap.set("#Flower-White-One-clip",{TransformOrigin:"bottom"});
gsap.set("#DG-Stem-One-clip",{TransformOrigin:"bottom"});




gsap.set("#Red-Flower-Leaves-Clip",{TransformOrigin:"bottom"});

gsap.set("#LG-Stem-Blue-One-clip",{TransformOrigin:"bottom"});
gsap.set("#Flower-Blue-Top-clip",{TransformOrigin:"bottom"});




gsap.set("#Yellow-Flower-clip",{TransformOrigin:"bottom"});



const mainTl = gsap. timeline();

function GrowPlantOne(){

  const tl = gsap.timeline();


  tl.from("#Plant-Clip", {duration:1, scaleY:0})
  .from("#Plants-Stems-Clip", {duration:.5, scaleY:0})
  .from("#leaves-Clip", {duration:.5, scaleY:0})
 
  

  return tl;

}

function GrassGrow(){

  const tl = gsap.timeline();

  tl.from("#Grass-clip", {duration:1, scaleY:0}, "grow");
  
  
  

  return tl;

}

function FlowerOne(){

  const tl = gsap.timeline();

  
  tl.from("#LG-Stem-Red-clip", {duration:1, scaleY:0}, "grow")
  .from("#Flower-Red-One-clip", {duration:1, scaleY:0}, "grow");
  
  

  return tl;

}

function FlowerTwo(){

  const tl = gsap.timeline();

 
  tl.from("#DG-Stem-Two-clip", {duration:1, scaleY:0})
  .from("#Flower-white-two-clip", {duration:.1, scaleY:0});
  
  

  return tl;

}

function FlowerThree(){

  const tl = gsap.timeline();

 
  tl.from("#LG-Stem-White-clip", {duration:1, scaleY:0})
  .from("#Flower-Red-Three-clip", {duration:1, scaleY:0});
  
  

  return tl;

}



function FlowerFour(){

  const tl = gsap.timeline();

 
  tl.from("#DG-Stem-One-clip", {duration:1, scaleY:0})
  .from("#Flower-White-One-clip", {duration:1, scaleY:0});
  
  

  return tl;

}

function FlowerFive(){

  const tl = gsap.timeline();

 
  tl.from("#Red-Flower-Leaves-clip", {duration:1, scaleY:0})
  .from("#Red-Flower-Group-clip", {duration:1, scaleY:0});
  
  

  return tl;

}

function FlowerSix(){

  const tl = gsap.timeline();

 
  tl.from("#LG-Stem-Blue-One-clip", {duration:1, scaleY:0})
  .from("#Flower-Blue-Bottom-clip", {duration:1, scaleY:0})
  .from("#Flower-Blue-Top-clip", {duration:1, scaleY:0})
  
  

  return tl;

}

function FlowerSeven(){

  const tl = gsap.timeline();

 
  tl.from("#Yellow-Flower-clip", {duration:1, scaleY:0})
  
  
  

  return tl;

}

function FlowerEight(){

  const tl = gsap.timeline();

 
  tl.from("#LG-Stem-Blue-Flower-Three-clip", {duration:1, scaleY:0})
  .from("Blue-Flower-Two-clip", {duration:1, scaleY:0});
  
  

  return tl;

}

function FlowerNine(){

  const tl = gsap.timeline();

 
  // tl.from("#LG-Stem-White-clip", {duration:1, scaleY:0})
  // .from("#Flower-Red-Three-clip", {duration:1, scaleY:0})
  
  

  return tl;

}

function FlowerTen(){

  const tl = gsap.timeline();

 
  // tl.from("#LG-Stem-White-clip", {duration:1, scaleY:0})
  // .from("#Flower-Red-Three-clip", {duration:1, scaleY:0})
  
  

  return tl;

}

mainTl.add(GrowPlantOne())
.add(GrassGrow())
.add(FlowerOne())
.add(FlowerTwo())
.add(FlowerThree())
.add(FlowerFour())
.add(FlowerFive())
.add(FlowerSix())
.add(FlowerSeven())
.add(FlowerEight())
.add(FlowerNine())
.add(FlowerTen());
