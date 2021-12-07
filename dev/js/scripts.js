import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { TweenMax, Power2, TimelineLite } from "gsap/umd/TweenMax"; 


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, TweenMax,Power2,TimelineLite, GSDevTools, MorphSVGPlugin);


gsap.set("#THECHAIN",{scalex:"center"});

gsap.set("#Bottom Group",{scalex:"center"});

gsap.set("#TopGroup",{scalex:"center"});

gsap.set("#1-LR-bottom-1", { scaleY: 0, transformOrigin: "center bottom" });


// gsap.set("#",{TransformOrigin:""});

// gsap.set("#",{TransformOrigin:""});

// gsap.set("#",{TransformOrigin:""});
// gsap.set("#",{TransformOrigin:""});

// gsap.set("#",{TransformOrigin:""});
// gsap.set("#",{TransformOrigin:""});

// gsap.set("#",{TransformOrigin:""});
// gsap.set("#",{TransformOrigin:""});

// gsap.set("#",{TransformOrigin:""});
// gsap.set("#",{TransformOrigin:""});













const mainTl = gsap. timeline();

function ScaleChainCenter(){

  const tl = gsap.timeline();


  tl.to("#THECHAIN",{duration:2.,scale:2.0, rotation:90, transformOrigin:"center"});
  
  

 
  

  return tl;

}

function ChainBrakeRotation(){

  const tl = gsap.timeline();
tl.to("#BottomGroup",{duration:1,rotation:90, transformOrigin:"50% 50%"});
tl.to("#TopGroup",{duration:1,rotation:-90, transformOrigin:"50% 50%"});

 
 
 
  
return tl;

} 

function ChainBrakeRotation2(){

  const tl = gsap.timeline();
tl.to("#TopGroup",{duration:2,rotation:-90, transformOrigin:"50% 50%"});
tl.to("#1-LR-bottom-1",{duration:0.5,scaleY:0});

 
 
 
  
return tl;

} 

// function ChainScaleY(){
//   tl.to("#1-LR-bottom-1",{duration:0.5,scaleY:0});

//   const tl = gsap.timeline();


 
 
 
  
// return tl;

// } 
GSDevTools.create();

mainTl.add(ScaleChainCenter())
.add(ChainBrakeRotation())
.add(ChainBrakeRotation2());
// .add(ChainScaleY());




