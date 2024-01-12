function locoV5(){
    const locomotiveScroll = new LocomotiveScroll();

}
locoV5();
function curEffect(){

var page1Content = document.querySelector(".page1_content");
var cur =  document.querySelector(".cursor");
 page1Content.addEventListener("mousemove",function(dets){

//     cur.style.left=dets.x+"px";
//     cur.style.top=dets.y+"px";

gsap.to(cur,{
    x:dets.x,
    y:dets.y
    
})
       

})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cur,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:0,
        opacity:0
    })
})

}
curEffect();


function page2Anim(){

    const splitType=document.querySelectorAll(".text_reveal");
    splitType.forEach((char,i)=>{
        const text=new SplitType(char,{types:"chars"});
        console.log(text)
        
        gsap.to(text.chars,{
          opacity:1,
        color:"#000",
        ease:"power1",
        // backgroundColor:"#000",
          stagger:.2,
            scrollTrigger:{
                trigger:".page2",
                // markers:true,
                start:"0% 50%",
                end:"100% 100%",
                scrub:2
            }
        
        })
    })
}
page2Anim();


function slider(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction:true,
          },
      });
}
slider();

function loader(){

    var tl=gsap.timeline();

    tl.from(".loader h3",{
        x:50,
        opacity:0,
        stagger:0.1,
        duration:1,
        rotateY:90,
        ease:"power2",
    })
    tl.to(".loader h3",{
        x:-50,
        // scale:0,
        opacity:0,
        stagger:0.1,
        duration:1,
        ease:"power2",
 

    })
    tl.to(".loader",{
        opacity:0,
        display:"none",
    })
    tl.to(".myText span",{
        y:0,
        duration:.5,
        stagger:0.05,
        delay:-0.5,
        rotate:0,
       
    })
}
loader();

function bgChange(){

    gsap.to(".main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:".page5",
            // markers:"true",
            start:"50 50%",
            end:"50 50%",
            scrub:3
    
        }
    })
}
bgChange();