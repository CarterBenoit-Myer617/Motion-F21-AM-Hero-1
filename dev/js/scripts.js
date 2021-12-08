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
gsap.set("#Vector_15",{transformOrigin:"bottom"});
gsap.set("#Vector_16",{transformOrigin:"bottom"});
gsap.set("#Vector_14",{transformOrigin:"top"});
gsap.set("#Vector_13",{transformOrigin:"top"});








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


  tl.to("#THECHAIN",{duration:2.,scale:2.3, rotation:-90, transformOrigin:"center"});
  
  

 
  

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




tl.to("#Vector_13",{duration:0.5,scaleY:7},"chain brakes!!")
tl.to("#Vector_14",{duration:0.5,scaleY:7},"chain brakes!!")


tl.to("#Vector_16",{duration:0.5,scaleY:5},"chain brakes!!")
tl.to("#Vector_15",{duration:0.5,scaleY:5},"chain brakes!!")

tl.to("#passweb",{duration:0.5,scaleY:.5},"chain brakes!!")

// tl.to("#BottomGroup", 1, {x:200, ease:5 .config(5)});

tl.to("#BottomGroup", 1, {y:"-130", delay:1, repeat:0},"chain brakes!!");
tl.to("#TopGroup", 1, {y:"+130", delay:1, repeat:0},"chain brakes!!");







 
 
 
  
return tl;
}


function SecondStep(){

  const tl = gsap.timeline();


  tl.to("#Union_7",{duration:0.5,scaleY:10},"heyy")
  tl.to("#Union_6",{duration:0.5,scaleY:0},"heyy")
  

tl.to("#Vector_13",{duration:0.5,scaleY:0},"heyy")
tl.to("#Vector_14",{duration:0.5,scaleY:0},"heyy")
tl.to("#Union_11",{duration:0.5,scaleY:10},"heyy")
tl.to("#Vector_17",{duration:0.5,scaleY:10},"heyy")


tl.to("#YerrUnion_4",{duration:0.5,scaleY:10},"heyy")
tl.to("#YerrUnion_5",{duration:0.5,scaleY:0},"heyy")
tl.to("#Vector_5",{duration:0.5,scaleY:20},"heyy")
tl.to("#passweb",{duration:0.5,scaleY:220},"heyy")



tl.to("#Vector_16",{duration:0.5,scaleY:0},"heyy")
tl.to("#Vector_15",{duration:0.5,scaleY:0},"heyy")

tl.to("#Vector", 1, {y:"-13", delay:1, repeat:0},"chain brakes!!");
tl.to("#Vector_12", 1, {y:"+15", delay:1, repeat:0},"chain brakes!!");
tl.to("#Union_10", 1, {y:"+15", delay:1, repeat:0},"chain brakes!!");
tl.to("#Union_3", 1, {y:"-13", delay:1, repeat:0},"chain brakes!!");
tl.to("#Vector_10", 1, {y:"+15", delay:1, repeat:0},"chain brakes!!");
tl.to("#Vector_11", 1, {y:"+15", delay:1, repeat:0},"chain brakes!!");
tl.to("#Union_2", 1, {y:"-13", delay:1, repeat:0},"chain brakes!!");



tl.to("#Union_10",{duration:0.5,scaleY:+6},"chain brakes!!")
tl.to("#Union_3",{duration:0.5,scaleY:-5},"chain brakes!!")



tl.to("#Vector_11",{duration:0.5,scaleY:+6},"chain brakes!!")
tl.to("#Union_2",{duration:0.5,scaleY:-5},"chain brakes!!")

tl.to("#Vector_10",{duration:0.5,scaleY:+6},"chain brakes!!")





tl.to("#Vector_9", 1, {y:"+15", delay:1, repeat:0},"chain brakes!!");
tl.to("#Vector_2", 1, {y:"-13", delay:1, repeat:0},"chain brakes!!");


  
  
  

 
  

  return tl;

}



GSDevTools.create();

mainTl.add(ScaleChainCenter())
.add(ChainBrakeRotation())
.add(SecondStep());





