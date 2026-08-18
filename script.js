gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({duration:1.15,smoothWheel:true,smoothTouch:false});
function raf(t){lenis.raf(t);requestAnimationFrame(raf)} requestAnimationFrame(raf);
lenis.on("scroll",ScrollTrigger.update); gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);

const typed = document.querySelector("#typed");
const text = "open_jorge_rodal.film";
let idx=0;
function type(){ if(idx<text.length){typed.textContent+=text[idx++];setTimeout(type,55)} }
setTimeout(type,450);

const intro = gsap.timeline({delay:.2});
intro.to(".opening-progress span",{width:"100%",duration:2.8,ease:"power2.inOut"})
.to(".terminal",{opacity:0,duration:.35},"-=.2")
.to(".opening",{yPercent:-100,duration:1.25,ease:"power4.inOut"})
.from(".hero-image",{scale:1.28,duration:1.7,ease:"power3.out"},"-=.9")
.from(".hero-title p",{opacity:0,y:20,duration:.7},"-=1")
.from(".hero-title h1",{y:100,opacity:0,duration:1.2,ease:"power4.out"},"-=.55")
.from(".subtitle",{opacity:0,y:15,duration:.6},"-=.5");

gsap.to(".timecode",{innerText:"00:01:12:18",scrollTrigger:{trigger:".playback",start:"top bottom",end:"bottom top",scrub:1}});

gsap.to(".hero-image",{yPercent:17,scale:1.2,ease:"none",scrollTrigger:{trigger:".scene-camera",start:"top top",end:"bottom top",scrub:1.5}});
gsap.to(".hero-title",{yPercent:-35,opacity:.25,scrollTrigger:{trigger:".scene-camera",start:"top top",end:"bottom top",scrub:1}});
gsap.to(".focus-box",{scale:1.6,opacity:0,scrollTrigger:{trigger:".scene-camera",start:"15% top",end:"70% top",scrub:1}});

gsap.from(".monitor",{clipPath:"inset(0 100% 0 0)",duration:1.4,ease:"power4.inOut",scrollTrigger:{trigger:".playback",start:"top 70%"}});
gsap.to(".monitor-image img",{scale:1.08,yPercent:-6,scrollTrigger:{trigger:".monitor-image",start:"top bottom",end:"bottom top",scrub:1}});

gsap.to(".darkroom-image>img",{yPercent:12,scrollTrigger:{trigger:".darkroom",start:"top bottom",end:"bottom top",scrub:1.3}});
gsap.to(".exposure",{opacity:0,scrollTrigger:{trigger:".darkroom",start:"top 75%",end:"top 25%",scrub:1}});
gsap.to(".chem i b",{width:"100%",scrollTrigger:{trigger:".darkroom",start:"top 75%",end:"center center",scrub:1}});
gsap.to(".chem strong",{textContent:"100%",snap:"textContent",scrollTrigger:{trigger:".darkroom",start:"top 75%",end:"center center",scrub:1}});
gsap.from(".darkroom-title span",{x:-100,opacity:0,stagger:.12,duration:1,ease:"power4.out",scrollTrigger:{trigger:".darkroom-title",start:"top 75%"}});

const track=document.querySelector(".strip-track");
const distance=()=>Math.max(0,track.scrollWidth-window.innerWidth+window.innerWidth*.1);
gsap.to(track,{x:()=>-distance(),ease:"none",scrollTrigger:{trigger:".filmstrip",start:"top top",end:()=>"+="+(distance()*1.25),pin:true,scrub:1,invalidateOnRefresh:true}});

gsap.from(".frame",{scale:.75,opacity:0,stagger:.08,scrollTrigger:{trigger:".strip-track",start:"top 80%",end:"top 45%",scrub:1}});

gsap.to(".playhead",{left:"85%",ease:"none",scrollTrigger:{trigger:".edit-suite",start:"top top",end:"bottom bottom",scrub:1}});
gsap.from(".clips article",{y:30,opacity:0,stagger:.12,duration:.7,scrollTrigger:{trigger:".clips",start:"top 80%"}});
gsap.to(".wave",{xPercent:-15,ease:"none",scrollTrigger:{trigger:".audio",start:"top bottom",end:"bottom top",scrub:1}});

gsap.to(".portrait-reveal",{clipPath:"inset(0 0% 0 0)",duration:1.6,ease:"power4.inOut",scrollTrigger:{trigger:".portrait-scene",start:"top 65%"}});
gsap.to(".portrait-reveal img",{yPercent:-12,ease:"none",scrollTrigger:{trigger:".portrait-reveal",start:"top bottom",end:"bottom top",scrub:1}});

gsap.from(".credit-roll h2",{scale:.7,opacity:0,duration:1.5,ease:"power4.out",scrollTrigger:{trigger:".credits",start:"top 70%"}});
gsap.from(".credit-columns div",{y:30,opacity:0,stagger:.1,scrollTrigger:{trigger:".credit-columns",start:"top 80%"}});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
 const el=document.querySelector(a.getAttribute("href")); if(el){e.preventDefault();lenis.scrollTo(el,{duration:1.4,offset:-20})}
}));
