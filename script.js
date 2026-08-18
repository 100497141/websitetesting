gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ duration: 1.15, smoothWheel: true, smoothTouch: false });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time)=>lenis.raf(time*1000));
gsap.ticker.lagSmoothing(0);

window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.to(".loader-line i",{width:"100%",duration:1.1,ease:"power3.inOut"})
    .to(".loader",{yPercent:-100,duration:1.05,ease:"power4.inOut"})
    .from(".hero-media",{scale:1.22,duration:1.8,ease:"power3.out"},"-=.6")
    .from(".hero h1 span",{yPercent:110,stagger:.12,duration:1.3,ease:"power4.out"},"-=1")
    .to(".reveal",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=.9")
    .from(".hero-tag",{opacity:0,y:20,duration:.8},"-=.5");
});

gsap.to(".hero-media",{
  yPercent:18, scale:1.2, ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.4}
});
gsap.to(".hero-copy",{yPercent:-35, opacity:.25, ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}
});
gsap.to(".scroll-cue",{opacity:0,y:30,scrollTrigger:{trigger:".hero",start:"top top",end:"25% top",scrub:true}});

gsap.from(".intro h2",{y:120,opacity:0,duration:1.2,ease:"power4.out",
  scrollTrigger:{trigger:".intro h2",start:"top 80%"}});
gsap.from(".reel-img",{clipPath:"inset(0 0 0 100%)",duration:1.5,ease:"power4.inOut",
  scrollTrigger:{trigger:".reel",start:"top 75%"}});
gsap.to(".reel-img img",{yPercent:-9,ease:"none",
  scrollTrigger:{trigger:".reel",start:"top bottom",end:"bottom top",scrub:1}});

gsap.to(".feature-media>img",{yPercent:16,ease:"none",
  scrollTrigger:{trigger:".feature",start:"top bottom",end:"bottom top",scrub:1.4}});
gsap.from(".feature-title span",{xPercent:-80,opacity:0,stagger:.1,duration:1.1,ease:"power4.out",
  scrollTrigger:{trigger:".feature-title",start:"top 75%"}});

const track = document.querySelector(".horizontal-track");
function horizontalScroll(){
  const distance = Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth*.08);
  gsap.to(track,{x:-distance,ease:"none",scrollTrigger:{
    trigger:".horizontal",start:"top top",end:()=>"+="+(distance*1.25),pin:true,scrub:1,invalidateOnRefresh:true
  }});
}
horizontalScroll();

gsap.from(".about h2",{y:100,opacity:0,ease:"power3.out",
  scrollTrigger:{trigger:".about",start:"top 70%",duration:1}});
gsap.to(".portrait img",{yPercent:-10,ease:"none",
  scrollTrigger:{trigger:".portrait",start:"top bottom",end:"bottom top",scrub:1}});

gsap.from(".timeline>div",{y:50,opacity:0,stagger:.12,duration:.8,ease:"power3.out",
  scrollTrigger:{trigger:".timeline",start:"top 80%"}});

gsap.from(".contact h2",{scale:.75,opacity:0,duration:1.4,ease:"power4.out",
  scrollTrigger:{trigger:".contact",start:"top 75%"}});

document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    const el=document.querySelector(a.getAttribute("href"));
    if(el){e.preventDefault();lenis.scrollTo(el,{offset:-20,duration:1.4});}
  });
});
