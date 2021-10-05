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