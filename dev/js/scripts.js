import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


gsap.set("#THECHAIN",{scalex:"center"});
gsap.set("#BottomGroup",{scalex:"center"});
gsap.set("#TopGroup",{scalex:"center"});
gsap.set("#Union_6",{transformOrigin:"top"});
gsap.set("#Union_7",{transformOrigin:"bottom"});
gsap.set("#Vector_17",{transformOrigin:"bottom"});
gsap.set("#Vector_8",{transformOrigin:"bottom"});
gsap.set("#Union_11",{transformOrigin:"bottom"});
gsap.set("#Union_4",{transformOrigin:"bottom"});

gsap.set("#YerrUnion_5",{transformOrigin:"bottom"});








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


  tl.to("#THECHAIN",{duration:2.,scale:2, rotation:-90, transformOrigin:"center"});
  
  

 
  

  return tl;

}

function ChainBrakeRotation(){

  const tl = gsap.timeline();
tl.to("#BottomGroup",{duration:1,rotation:90, transformOrigin:"50% 50%"},"chain brakes!!")
tl.to("#TopGroup",{duration:1,rotation:-90, transformOrigin:"50% 50%"},"chain brakes!!")

tl.to("#Union_7",{duration:0.5,scaleY:.3},"chain brakes!!" )
tl.to("#Union_6",{duration:0.5,scaleY:6},"chain brakes!!")



tl.to("#Vector_8",{duration:0.5,scaleY:0},"chain brakes!!")
tl.to("#Vector_7",{duration:0.5,scaleY:12},"chain brakes!!")


tl.to("#Vector_17",{duration:0.5,scaleY:0.3},"chain brakes!!")
tl.to("#Union_11",{duration:0.5,scaleY:0.3},"chain brakes!!")


tl.to("#YerrUnion_4",{duration:0.5,scaleY:.3},"chain brakes!!")
tl.to("#YerrUnion_5",{duration:0.5,scaleY:7},"chain brakes!!")

tl.to("#Vector_5",{duration:0.5,scaleY:3.5},"chain brakes!!")




 
 
 
  
return tl;

} 

GSDevTools.create();

mainTl.add(ScaleChainCenter())
.add(ChainBrakeRotation());





