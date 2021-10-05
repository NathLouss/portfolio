// animation banner elements
const titleSpans = document.querySelectorAll('.title span');
const medias = document.querySelectorAll('.connect');
const img = document.getElementById('img-banner');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(titleSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .staggerFrom(img, 1, {left: -200, opacity:0, ease: "power2.out"}, 0.3, '-=2')
  .from(medias, 1, {transform: "scale(0)", ease: "power2.out"}, '-=2');

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