// animation banner elements
const titleSpans = document.querySelectorAll('.title span');
const medias = document.querySelectorAll('.connect');
const img = document.getElementById('img-banner');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .from(img, {opacity:0, duration:4, rotation: 45, ease: "power2.out"})
  .staggerFrom(titleSpans, 0.7, {top: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=4')
  .staggerFrom(medias, 1, {transform: "scale(0)", ease: "easeInOut"}, 0.3, '-=4');

  TL.play();
})


//  animation etc
 const etc = document.getElementById('etc');

 new Typewriter(etc, {
   loop: true,
   cursor: ''
  })
 .changeDelay(200)
 .typeString('...')
 .pauseFor(1000)
 .start()